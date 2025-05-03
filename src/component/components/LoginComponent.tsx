import { FaArrowRight } from "react-icons/fa";
import { FaEnvelope, FaLock } from "react-icons/fa6";


const  LoginComponent =()=>{
    return <div className="L-container">
    <form className='login-form'>
      <div className='form-title'>
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>
      </div>
      <div className="form-group rform-group">
                <label htmlFor="email">Email</label>
                <div className="input-icon">
                  <FaEnvelope size={25} color={" rgb(71, 71, 71)"} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                </div>
      <div className="form-group ">
        <label htmlFor='password'>Password</label>
        <div className="input-icon">
          <FaLock size={21} color={' rgb(71, 71, 71)'}/>
          <input type="password" id="password" name="password" placeholder='Enter you password' required />
        </div>
      </div>
      <button className='login-button' type='submit'>
        <div className='l-button-text'>Login<FaArrowRight/></div>
      </button>

      <div className="option" >
        <p>Don't have an account? <span className='highlight-option'  >Create one</span> </p>
         
      </div>
    </form>
  </div>
}

export default LoginComponent;