import './Form.css'

function Form() {
    return(
        <form className="form">
            <input type="email" placeholder="Email" name="email" className="form__input"/>
            <input type="password" placeholder="Password" name="pass" className="form__input"/>
            <input type="submit" className="form__submit-btn" value="Sign in"/>
        </form>
    );
}

export default Form;