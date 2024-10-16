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
      <section className="modal-wrapper relative">
        <div className="content-wrapper absolute top-24 left-1/3 flex flex-col items-center min-w-96 h-auto border-solid border rounded-lg py-5">
          <h2 className="header-text w-full h-auto flex justify-center text-xl pt-4 select-none">Đăng Kí</h2>
          <p className="sub-text w-full h-auto flex justify-center mt-3 text-sm opacity-50 select-none">Nhập thông tin của bạn!</p>
          <form onSubmit={handleSubmit}>
            <div className="input flex flex-col justify-center items-center w-full h-auto my-7">
              <input
                className="user-name w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid border-slate-300 rounded "
                placeholder="Tên người dùng"
                name="name"
                type="text"
                value={formValue.name}
                onChange={handleChangeRegister}
              />
              <input
                className="email w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid  border-slate-300 rounded "
                placeholder="Email"
                name="email"
                type="email"
                value={formValue.email}
                onChange={handleChangeRegister}
              />
              <input
                className="password w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid  border-slate-300 rounded"
                placeholder="Mật khẩu"
                name="password"
                type="password"
                value={formValue.password}
                onChange={handleChangeRegister}
              />
              <input
                className="password w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid  border-slate-300 "
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                type="password"
                value={formValue.confirmPassword}
                onChange={handleChangeRegister}
              />
            </div>
            <button
              className="login-button transition delay-100 w-full text-white px-5 py-2 my-0 mx-auto border border-solid  border-slate-300 rounded cursor-pointer hover:bg-red-500 hover:text-black"
              type="submit"
            >
              Đăng kí
            </button>
          </form>
          <div className="list flex h-auto my-3 items-center text-left">
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
          <div className="check-text flex pb-5">
            <p className="select-none">Đã có tài khoản?</p>
            <p className="register-text transition delay-100 font-medium pl-1 cursor-pointer hover:text-black" onClick={handleShowSignUp}>
              Đăng nhập
            </p>
          </div>
        </div>
      </section>
    );
  } else
    return (
      <section className="modal-wrapper relative">
        <div className="content-wrapper absolute top-24 left-1/3 flex flex-col items-center w-96 h-auto border-solid border rounded-lg py-5">
          <h2 className="header-text w-full h-auto flex justify-center text-xl pt-4 select-none">Đăng nhập</h2>
          <p className="sub-text w-full h-auto flex justify-center mt-3 text-sm opacity-50 select-none">Nhập tài khoản và mật khẩu của bạn!</p>
          <form onSubmit={handleSubmitLogin}>
            <div className="input flex flex-col justify-center items-center w-full h-auto my-7">
              <input
                className="email w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid border-slate-300 rounded"
                placeholder="Email"
                name="email"
                type="email"
                value={formLoginValue.email}
                onChange={handleChangeLogin}
              />
              <input
                className="password w-full h-auto size-4 pt-2 pr-16 pb-2 pl-5 my-2 border border-solid border-slate-300 rounded"
                placeholder="Mật khẩu"
                name="password"
                type="password"
                value={formLoginValue.password}
                onChange={handleChangeLogin}
              />
            </div>
            <button className="login-button transition delay-100 w-full text-white px-5 py-2 my-0 mx-auto border border-solid  border-slate-300 rounded cursor-pointer hover:bg-red-500 hover:text-black" type="submit">
              Đăng nhập
            </button>
          </form>
          <a href="#!" className="sub-text w-full h-auto flex justify-center mt-3 text-sm opacity-50 select-none">
            Quên mật khẩu?
          </a>
          <div className="list flex h-auto my-3 items-center text-left">
            <div>
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
          <div className="check-text flex pb-5">
            <p className="select-none">Chưa có tài khoản?</p>
            <p className="register-text transition delay-100 font-medium pl-1 cursor-pointer hover:text-black" onClick={handleRegister}>
              Đăng kí
            </p>
          </div>
        </div>
      </section>
    );
}

export default SignInLayout;
