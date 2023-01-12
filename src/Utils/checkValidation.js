const checkValidation = (values) => { 
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.username && values.username.length===0) {
        alert(JSON.stringify(values.username))
      errors.username = "Username is required!";
    }
    if (values.email.length===0) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.password.length===0) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
}
export default checkValidation;