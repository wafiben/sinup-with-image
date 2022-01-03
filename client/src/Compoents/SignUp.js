import React, { useState } from "react";
import { register } from "../Redux/action/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthReducer from "./../Redux/Reducers/AuthReducer";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);


  const [user, setUser] = useState({
    username: " ",
    email: " ",
    password: " ",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  

  const onSubmit = (event) => {
    
    event.preventDefault();
    let formData=new FormData()
  formData.append('username',user.username)
  formData.append('email',user.email)
  formData.append('password',user.password)
  formData.append('image',image) 
  
    dispatch(register(formData ,navigate));
/* 
    setUser({
      username: " ",
      email: " ",
      password: " ",
    }); */
  };

  return (
    <form encType="multerpart/form-data" onSubmit={onSubmit}>
      <div className="form-group">
        <label for="username">Username</label>
        <input
          value={user.username}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          value={user.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={user.password}
          onChange={handleChange}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <input
        accept="image/*"
        /*  value={image}  */
        onChange={(event) => setImage(event.target.files[0])}
        type="file"
        className="form-control"
        id="image"
        placeholder="Password"
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
