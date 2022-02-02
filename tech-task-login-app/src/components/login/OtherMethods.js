import React from "react";
import styles from './OtherMethod.module.css'
import history from "../../history";

const OtherMethods = props => (
    <div className={styles.alternativeLogin}>
        <div className={styles.iconGroup}>
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);


const Facebook = props => (
    <a href="#" className={styles.facebookIcon}></a>
);

const Twitter = props => (
    <a href="#" className={styles.twitterIcon}></a>
);

const Google = props => (
    <a href="#" className={styles.googleIcon}></a>
);


export default OtherMethods
