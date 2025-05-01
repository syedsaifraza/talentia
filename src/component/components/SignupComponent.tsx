import { FiLock, FiUnlock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";


const SignUpComponent = () => {
  return (
    <div className="R-container">
      <form className="register-form">
        <div className="form-title">
          <h1>Create an Account</h1>
        </div>
        <div className="name-fields">
          <div className="name-field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="name-field">
            <label htmlFor="middlename">Middle Name</label>
            <input
              type="text"
              id="middlename"
              name="middlename"
              placeholder="Middle Name"
            />
          </div>
          <div className="name-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="r-dob-gen ">
          <div className="rdob rform-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="rgen rform-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="" style={{background:"#fee7ce"}} disabled defaultValue={""}>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="form-group rform-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <HiOutlineMail size={25} color={" rgb(71, 71, 71)"} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="register-password">
          <div className="rpassword">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <FiUnlock size={21} color={" rgb(71, 71, 71)"} />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="cpassword">
            <label htmlFor="password">Confirm Password</label>
            <div className="input-icon ">
              <FiLock size={21} color={" rgb(71, 71, 71)"} />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
        </div>
        <button className="login-button" type="submit">
          <div className="l-button-text">
            Register
            <FaArrowRight />
          </div>
        </button>

        <div className="option">
          <p>
            Already have an account?{" "}
            <span className="highlight-option"  >Login Here</span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
