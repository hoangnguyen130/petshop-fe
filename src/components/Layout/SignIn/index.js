import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
// import axios from "axios";

import './SignIn.css';

// let registerForm = false

function SignInLayout() {
  const navigate = useNavigate();

  const initValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const initLoginValue = {
    email: '',
    password: '',
  };
  const [registerForm, setRegisterForm] = useState(false);

  const [formValue, setFormValue] = useState(initValue);
  const [formLoginValue, setFormLoginValue] = useState(initLoginValue);

  // const [user, setUser] = useState({})

  // console.log(user)
  // useEffect(() => {
  //     axios
  //         .post(`http://localhost:3001/v1/auth/register`, formValue)
  //         .then((res) => {
  //             setUser(res)
  //         })
  // }, [formValue])

  const handleRegister = () => {
    setRegisterForm(true);
  };
  const handleShowSignUp = () => {
    setRegisterForm(false);
  };
  const handleChangeRegister = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleChangeLogin = (event) => {
    const { value, name } = event.target;
    setFormLoginValue({
      ...formLoginValue,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log(formLoginValue);
  };
  if (registerForm) {
    return (
      <section className="modal-wrapper">
        <div className="content-wrapper">
          <h2 className="header-text">Đăng Kí</h2>
          <p className="sub-text">Nhập thông tin của bạn!</p>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                className="user-name"
                placeholder="Tên người dùng"
                name="name"
                type="text"
                value={formValue.name}
                onChange={handleChangeRegister}
              />
              <input
                className="email"
                placeholder="Email"
                name="email"
                type="email"
                value={formValue.email}
                onChange={handleChangeRegister}
              />
              <input
                className="password"
                placeholder="Mật khẩu"
                name="password"
                type="password"
                value={formValue.password}
                onChange={handleChangeRegister}
              />
              <input
                className="password"
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                type="password"
                value={formValue.confirmPassword}
                onChange={handleChangeRegister}
              />
            </div>
            <button className="login-button" type="submit">
              Đăng kí
            </button>
          </form>
          <div className="list">
            <span>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  localStorage.setItem('token', decoded.jti);
                  navigate('/');
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </span>
          </div>
          <div className="check-text">
            <p className="select-none">Đã có tài khoản?</p>
            <p className="register-text" onClick={handleShowSignUp}>
              Đăng nhập
            </p>
          </div>
        </div>
      </section>
    );
  } else
    return (
      <section className="modal-wrapper">
        <div className="content-wrapper">
          <h2 className="header-text">Đăng nhập</h2>
          <p className="sub-text">Nhập tài khoản và mật khẩu của bạn!</p>
          <form onSubmit={handleSubmitLogin}>
            <div className="input">
              <input
                className="email"
                placeholder="Email"
                name="email"
                type="email"
                value={formLoginValue.email}
                onChange={handleChangeLogin}
              />
              <input
                className="password"
                placeholder="Mật khẩu"
                name="password"
                type="password"
                value={formLoginValue.password}
                onChange={handleChangeLogin}
              />
            </div>
            <button className="login-button" type="submit">
              Đăng nhập
            </button>
          </form>
          <a href="#!" className="sub-text">
            Quên mật khẩu?
          </a>
          <div className="list">
            {/* <a href="#!">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a> */}
            <div className="w-full">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  localStorage.setItem('token', decoded.jti);
                  navigate('/');
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </div>
          <div className="check-text">
            <p className="select-none">Chưa có tài khoản?</p>
            <p className="register-text" onClick={handleRegister}>
              Đăng kí
            </p>
          </div>
        </div>
      </section>
    );
}

export default SignInLayout;
