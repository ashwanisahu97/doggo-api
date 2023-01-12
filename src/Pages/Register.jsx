
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
    // useEffect(() => { 
    //     // alert(JSON.stringify(formErrors))
    // }, [formErrors])
    // useEffect(() => { 
    //     alert("inside useEffect")
        
    // },[isSubmit,formErrors])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    //   alert(JSON.stringify(formValues))
      console.log("formValues", formValues);
      setFormErrors(checkValidation(formValues))
      setIsSubmit(true)
      if (isSubmit&&Object.keys(formErrors).length===0) {
        alert("going to localstorage")
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(formValues);
          localStorage.setItem("users", JSON.stringify(users))
      }
      navigate("/login")
    }

  return (
    <div className={styles.container}>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="">Signed up successfully</div>
    ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )}

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