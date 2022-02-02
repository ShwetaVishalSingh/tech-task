import FormHeader from "./FormHeader";
import Form from "./Form";
import OtherMethods from "./OtherMethods";
import React from "react";
import styles from "./LoginForm.module.css"

const LoginForm = () =>{
    return(
        <div className={styles.loginform}>
            <FormHeader title="Ortex Login" />
            <Form />
            <OtherMethods />
        </div>
    )
}
export default LoginForm
