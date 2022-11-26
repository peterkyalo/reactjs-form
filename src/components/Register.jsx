import React, { useState } from "react";

const Register = (props) => {
  // const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder='Your Full Name' id='name' name='name' /> */}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
