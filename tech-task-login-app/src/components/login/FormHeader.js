import React from "react";
import styles from "./FormHeader.module.css"

const FormHeader = props => (
    <h2 className={styles.headerTitle} >{props.title}</h2>
);
export default FormHeader
