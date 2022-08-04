import React from 'react'
import style from './login.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            userName: 'leila',
            password: '',
            submit: '',
            passwordShown: false
        }

        this.handleState = this.handleState.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    }

    handleState(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    togglePasswordVisibility() {
        this.setState ({
            ...this.state,
            passwordShown: !this.state.passwordShown
        })
    }

    render() {
        return (
            <div className={style.container}>

                <form className={style.form}>

                    <h1>
                        Log In
                    </h1>
                    
                    <div className={style.containerInput}> {/*</form className={`${style.containerInput} input`}>*/ }
                    
                        <input 
                            type='text' 
                            name='userName'     
                            id='userName'
                            value={this.state.userName} 
                            onChange={this.handleState}
                            placeholder='a'
                            className={style.input}
                        /> 

                        <label htmlFor='username' className={style.label}>
                            Username
                        </label>

                    </div>

                    <div className={style.containerInput}>
                        
                        <input 
                            type={this.state.passwordShown ? 'text' : 'password'} 
                            name='password'
                            id='password'
                            value={this.state.password} 
                            onChange={this.handleState}
                            placeholder='a'
                            className={style.input}
                        /> 

                        <label htmlFor='password' className={style.label}>
                            Password
                        </label>

                        <i onClick={this.togglePasswordVisibility} className={style.iconPassword}>
                            {this.state.passwordShown ? <VisibilityOutlinedIcon fontSize="small"/> : <VisibilityOffOutlinedIcon fontSize="small"/>}
                        </i>
                    
                    </div>

                    <a href="#" className={style.forgotPassword}>
                       Forgot password?
                    </a>
      
                
                    <input 
                        type='submit' 
                        onClick={this.handleSubmit} 
                        className={style.submitButton} 
                        value='Log In'
                    />
                    
                    <hr className={style.horizontalLine} />

                    <div>
                        <Link to={`/logup`} className={style.createNewAccount}> 
                            Create new account 
                        </Link>
                    </div>
                        
                </form>

            </div>
        );
    };
};

export default LogIn