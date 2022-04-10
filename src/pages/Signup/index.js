import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './styles.css';

function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  function handleSignup(){
    if(userName !== ''){
      localStorage.setItem('user', userName);

      navigate('/');
    }
  }

    return (
      <React.Fragment>
        <div className="container-signup">
          <div className="box-signup">
            <h5>Welcome to CodeLeap network!</h5>
            <p>
              Please enter your username
            </p>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder='John doe'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button 
              onClick={handleSignup} 
              disabled={!userName.length}
            >
              ENTER
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default Signup;