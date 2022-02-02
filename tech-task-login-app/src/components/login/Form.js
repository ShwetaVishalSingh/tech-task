import React from "react";
import history from '../../history';


const Form = () => {
    return (
        <div>
            <form  >
                <FormInput description="Username" placeholder="Enter your username" type="text" />
                <FormInput description="Password" placeholder="Enter your password" type="password"/>
                <FormButton title="Log in"/>
                <FormButton title="Reset Password"/>


            </form>

        </div>
    )};

const FormButton = props => {

    return (
    <div id="submit" class="row">
        <button type="button" onClick={() => history.push(props.title === 'Reset Password' ? '/reset' : '/home')}>{props.title}</button>

    </div>
)};

const FormInput = props => (
    <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);
export default Form
