
import { useState, useEffect } from "react";

const Register=()=> {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div></div>
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register