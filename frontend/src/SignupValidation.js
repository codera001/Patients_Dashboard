function Validation(values) {
    let error ={}
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const password_pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
 

    if(values.name === " ") {
        error.name = "Name should not be empty"
    }else {
        error.name = ""
    }
    
    if(values.email === " ") {
        error.email = "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    }  else {
        error.email = ""
    }

    if(values.password === " ") {
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    }  else {
        error.password = ""
    }
    return error;
}
export default Validation;