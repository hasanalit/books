import axios from "axios";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import LoginImg from '../Assets/Images/Login.jpg'
import BookImg from '../Assets/Images/bookshelter.png'


function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const submit = function(){

    axios.post("https://reqres.in/api/login", {
        email: name,
        password: password
    }).then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userName', name);
        localStorage.setItem('password', password);
        navigate('../Components/Home')
    })
}

  return (
    <Wrapper  style={{ backgroundImage:`url(${LoginImg})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
        <div className="container">
          <div className="form-section">
            <img className="login_img" src={BookImg} alt="login-logo" />
            <input onChange={(e) => setName(e.target.value)} type="text"
            className="form-control1"
            placeholder="Username" />
             <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
            <button className="btn" onClick={submit}>Login</button>
            </div>
        </div>
    </Wrapper>
  );
}

export default Login;


const Wrapper = styled.div`
height: 100vh;
overflow: hidden;

.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.login_img {
  margin-bottom: 50px;
  width: 226px;
  height: 44px;
}

.form-control1 {
  margin-bottom: 20px;
  padding: 12px 20px 13px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
}

.form-control {
  margin-bottom: 43px;
  padding: 12px 20px 13px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
}

.btn {
  padding: 13px 123px 12px;
  background-color: #fff;
  color: #0D75FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
}
`