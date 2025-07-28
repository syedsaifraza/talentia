
 
import Cookies from 'js-cookie';

import { useDispatch } from 'react-redux';
import { setLoggedInUser, setUserInfo ,setUserAccounts ,setUserFollowers,setUserFollowings } from '@/store/slices/authSlices';
import { setInstitue } from '@/store/slices/institutionSlice';
import {setStatus} from '@/store/slices/statusSlice';
import { fetchUserProfileAndInstitute } from '@/utils/apis/auth';
import { useEffect , useState } from 'react';
import { setReels } from '@/store/slices/reelsSlice';


// 🔹 Validate Token
const validateTokenAndFetchUser = async (token) => {
  const res = await fetch('https://talentia.org.in/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (!res.ok) throw new Error("Token validation failed");

  return await res.json();
};


// 🔹 Fetch Profile + Institute Data



// 🔹 Logout Function
const logoutUser = () => {
  Cookies.remove('token');
};


// 🔸 Main Hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    const authenticate = async () => {
      try {
        const userData = await validateTokenAndFetchUser(token);
        const { instituteData, profileData,statusData,reelsData } = await fetchUserProfileAndInstitute(token)

        dispatch(setLoggedInUser(userData));
        console.log(profileData)
        //console.log(reelsData)
        dispatch(setReels(reelsData.posts))
        dispatch(setUserInfo(profileData.data));
        dispatch(setUserAccounts(profileData.associated_account));
        dispatch(setUserFollowers(profileData.followers));
        dispatch(setUserFollowings(profileData.followings));
        dispatch(setInstitue(instituteData.institutions));
        dispatch(setStatus(statusData.posts))

        setUser(userData.user);
      } catch (err) {
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return { user, loading, error, logout };
};

export default useAuth;

