import React from "react";
import history from "../../history";
import styles from './LoginForm.module.css'

const Home = () => {

    return (
        <div className={styles.loginform} >
            <div>
                <form  >
                    <FormInput description="New Password" placeholder="enter your email address" type="text" />
                    <FormButton title="Reset"/>

                </form>

            </div>

        </div>
    )};

const FormButton = props => {

    return (
        <div id="submit" style={{paddingBottom: '15px'}} class="row">
            <button type="button" onClick={() => history.push('/')}>{props.title}</button>

        </div>
    )};

const FormInput = props => (
    <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);
const ResetButton = props => {

    return (
        <div class="row">
            <button type="button" onClick={() => history.push('/reset')}>{props.title}</button>

        </div>
    )};

export default Home
