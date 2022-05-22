import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import { login } from "../../slices/authSlice";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Login = () => {
  const initState = {
    email: "",
    password: "",
  };
  const { formValue, setFormValue, handleOnChange } =
    useHandleOnChange(initState);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(formValue));
  };
  return (
    <Fragment>
      <div className="input-field flex flex-col gap-3 ">
        <CustomInput
          name="email"
          value={formValue.email}
          onChange={handleOnChange}
          inputType="email"
          placeHolder="Email here..."
          title="Email"
        />
        <CustomInput
          name="password"
          value={formValue.password}
          onChange={handleOnChange}
          inputType="password"
          placeHolder="Password..."
          title="Password"
        />
      </div>

      <div className="text-right opacity-70 text-sm my-3 mr-1 ">
        Forgot your password?
      </div>

      <CustomButton onClick={handleLogin}>Login</CustomButton>
    </Fragment>
  );
};

export default Login;
