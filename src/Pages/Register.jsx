
import { useState, useEffect } from "react";
import checkValidation from "../Utils/checkValidation";
import styles from "../Styles/Register.module.css"
import { useNavigate } from "react-router-dom";
const Register=()=> {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    useEffect(() => { 
       
    }, [formErrors])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("formValues", formValues);
      setFormErrors(checkValidation(formValues))
      setIsSubmit(true);
      if (isSubmit&&Object.keys(formErrors).length===0) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(formValues);
          localStorage.setItem("users", JSON.stringify(users))
          navigate("/")
      }
      console.log(formErrors);
    }

  return (
    <div className={styles.container}>

    <form onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <div className="styles.form">
        <div className={styles.inputField}>
                      <label>Username</label>
                      <br />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
                          onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className={styles.inputField}>
                      <label>Email</label>
                      <br />
          <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={formValues.email}
                          onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className={styles.inputField}>
                      <label>Password</label>
                      <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
        />
        </div>
        <p>{formErrors.password}</p>
        <button className={styles.submit}>Register</button>
      </div>
    </form>
  </div>
  );
}

export default Register