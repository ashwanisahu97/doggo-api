
import { useState, useEffect } from "react";
import checkValidation from "../Utils/checkValidation";
import styles from "../Styles/Register.module.css"

const Login=()=> {
    const initialValues = {
        email: "",
        password: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => { 
        // alert(JSON.stringify(formErrors))
    },[formErrors])

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
    };
    if (isSubmit) { 
        alert( alert(JSON.stringify(formValues)))
    }

  
  return (
    <div className={styles.container}>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="">Signed in successfully</div>
    ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )}

    <form onSubmit={handleSubmit}>
      <h1>Login form</h1>
      <div className="styles.form">
        <div className={styles.inputField}>
                      <label>Email</label>
                      <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
                          onChange={handleChange}
                          required
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
          required/>
        </div>
        <p>{formErrors.password}</p>
        <button className={styles.submit}>Login</button>
      </div>
    </form>
  </div>
  );
}

export default Login