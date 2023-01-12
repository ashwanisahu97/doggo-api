
import { useState, useEffect } from "react";
import checkValidation from "../Utils/checkValidation";
import styles from "../Styles/Register.module.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
    let isAuth = JSON.parse(localStorage.getItem("isAuth"));
    const initialValues = {
        email: "",
        password: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
       
        if (isAuth) { 
            return navigate("/home")
         }
     
     },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //   alert(JSON.stringify(formValues))
        console.log("formValues", formValues);
        setFormErrors(checkValidation(formValues))
        if (Object.keys(formErrors).length === 0){
            const users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.length === 0) {
                alert("please enter the correct details!!")
            } else {
                let temp = users.filter((e) => {
                    return e.email === formValues.email && e.password === formValues.password
                })
                if (temp.length !== 0) { 
                    localStorage.setItem("isAuth",true)
                    navigate("/home")
                }
                    }
            }
    }
   
  
  return (
    <div className={styles.container}>
      <div>{JSON.stringify(formValues, undefined, 2)}</div>

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