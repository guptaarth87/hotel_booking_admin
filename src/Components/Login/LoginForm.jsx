import React ,{ useState } from 'react'
import './LoginForm.css';
import { useNavigate} from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [failed ,  setfailed] = useState(false);
    const [user, setUser] = useState({
        userId: '',
        password: '',
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform further actions with the user data here
        console.log('User data:', user);
        if (user.userId  === "adminAmarShanti" && user.password === "amarshanti@123"){
            navigate('/dashboard');
        }else{
            setfailed(true);
        }
      };

  return (
    <>
    {
        failed?
        <div className="card p-4 col-lg-4 col-md-8 col-sm-12 position_confirm_card">
           <h6>Please enter correct password and login userid.</h6><br></br><br></br>
           <button className='btn btn-success col-5' onClick={()=>{setfailed(false)}}>OK</button>
        </div>
        :
        <></>
    }
    <div className="card col-lg-3 col-md-4 col-sm-12 p-3 mt-4 center_pos">
        <h4 className='alignCentre'>Login </h4>
        <label className='mt-2'>Enter Your User id</label>
        <input type="text" className="form-control"
        id="userId"
        name="userId"
        value={user.userId}
        onChange={handleInputChange}
         />
        <label className='mt-2'>Enter your Password</label>
        <input type="password" className='form-control' 
         id="password"
         name="password"
         value={user.password}
         onChange={handleInputChange}
         />
        <br></br><br></br>
        <button className='btn btn-success' onClick={handleSubmit}>Login</button>
    </div>
    </>
  )
}
