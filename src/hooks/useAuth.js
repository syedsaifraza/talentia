// hooks/useAuth.js
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; 
import { setLoggedInUser, setUserInfo } from '@/store/slices/authSlices';
import { useDispatch } from 'react-redux';
import  { setInstitue  } from '@/store/slices/institutionSlice';
 
 

const useAuth = () => {
  const [user, setUser] = useState(null);  // Store user data
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track any errors
  const dispatch = useDispatch();
  useEffect(() => { 
    const token = Cookies.get('token'); 
    if (!token) {
      setLoading(false);
      setUser(null);
      
      return;
    }

    // Call API to validate token
    const validateToken = async () => {
      try {
        const res = await fetch('https://talentia.humanoid.education/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
          }, 
        });

        

        if (res.ok) {
          const data = await res.json();
          const institutes = await fetch('https://talentia.humanoid.education/api/institute', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${token}`
            }, 
          });

          const userProfile = await fetch('https://talentia.humanoid.education/api/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${token}`
            }, 
          });

          const institueData = await institutes.json();
          const profileData = await userProfile.json();
          console.log("profileData");
          console.log(profileData.data)
          // alert("seeting user")
          // alert(JSON.stringify(data.user))
          dispatch(setLoggedInUser(data))
          dispatch(setUserInfo(profileData.data))
          dispatch(setInstitue(institueData.institutions))
          setUser(data.user);  // Store user data in state
        } else {
          setUser(null);  // If token is invalid, clear user data
        }
      } catch (err) {
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, []);

  const logout = () => {
    Cookies.remove('token');  // Remove token from cookies
    setUser(null);  // Clear user data from state
  };

  return { user, loading, error, logout };
};

export default useAuth;
