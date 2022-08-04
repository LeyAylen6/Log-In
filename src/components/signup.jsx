// no redirige al completar todos los campos
// hacer tilde y cruz cuando verifique password

//Las fechas pasan sin importar los limites. fechas logicas necesita


import { render } from '@testing-library/react';
import React from 'react'
import { Navigate } from 'react-router'
import style from './signup.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StyledEngineProvider } from '@mui/styled-engine';

const regex = {
    name: /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+\s*(?:[A-ZÁÉÍÓÚ][a-zñáéíóú]+)?/ ,
    surname: /^(?=.{3,20}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+\s*(?:[A-ZÁÉÍÓÚ][a-zñáéíóú]+)?/ ,
    email: /[^.][a-zA-Z0-9_.-]+[^.]+@[a-z]+[.a-z]+/ ,
    username: /^[A-Za-z0-9_-]{3,16}$/ ,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    confirmPassword: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    birthday: /\d{4}-\d{2}-\d{2}/ 
}

class SignUp extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            passwordShown: false,
            confirmPasswordShown: false,
            birthday: '',
            gender: '',
            handleSubmit: '',
            redirect: false,
        }
        
        this.handleChange= this.handleChange.bind(this);
        this.togglePaswordVisibility = this.togglePaswordVisibility.bind(this);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // if (!regex[e.target.name].test(e.target.value)) {
        //     e.target.className = `${style.input} ${style.redInput}`
        // } else {
        //     e.target.className =  `${style.greenInput}`
        // }

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }


    togglePaswordVisibility(e, inputName) {
        e.preventDefault()
        this.setState({
            ...this.state,
            [inputName + 'Shown']: !this.state[inputName + 'Shown'] 
            //Agrega inputName que vale 'password' o 'confirmPassword' en este caso. Le suma 'shown' para que sea passwordShown.. 
            //Similar a poner passwordShown: !passwordShown , pero se puede utilizar para varios input a la vez
        })
    }

    // validarcontraseña() {
    //     if( this.state.password === this.state.confirmPassword) {
    //         return console.log('Las contraseñas coinciden')
    //     }
    //         return console.log('Las contraseñas no coinciden')
    // }

    validate(e) {
        if (!regex.name.test(e.target.value)) {
            return false
        } else if (!regex.surname.test(e.target.value)) {
            return false
        } else if (!regex.email.test(e.target.value)) {
            return false
        } else if (!regex.username.test(e.target.value)) {
            return false
        } else if (!regex.password.test(e.target.value)) {
            return false
        } else if (!regex.confirmPassword.test(e.target.value)) {
            return false
        } else if (!regex.birthday.test(e.target.value)) {
            return false
        }
        
        this.setState ({
            ...this.state, 
            redirect: true 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.validate()
    }

    render() {
        return (
            <div className={style.container}>
                <form className={style.form}>
                    <h1>
                        Sign Up
                    </h1>

                    <div className={style.containerInput}>
                        <input 
                            id='name' 
                            name='name'
                            type='text' 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        
                        <label htmlFor='name' className={style.label}>
                            First Name
                        </label>

                        <i className={style.icon}>
                            {regex.name.test(this.state.name) ? <CheckRoundedIcon/> : <CloseRoundedIcon/>}
                        </i>
                    </div>
                    
                    <div className={style.containerInput}>
                        <input 
                            id='surname' 
                            name='surname' 
                            type='text' 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        <label htmlFor='surname' className={style.label}>
                            Surname
                        </label>

                    </div>

                    <div className={style.containerInput}>
                        <input 
                            id='username' 
                            name='username' 
                            type='text' 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        
                        <label htmlFor='username' className={style.label}>
                            Username
                        </label>
                    </div>
                    
                    <div className={style.containerInput}>
                        <input 
                            id='email' 
                            name='email' 
                            type='text' 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        
                        <label htmlFor='email' className={style.label}>
                            Email
                        </label>
                    </div>
                    
                    <div className={style.containerInput}>
                        <input 
                            id='password' 
                            name='password' 
                            type={this.state.passwordShown ? 'text' : 'password'} 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        
                        <label htmlFor='password' className={style.label}>
                            Password
                        </label>

                        <i onClick={(e) => this.togglePaswordVisibility(e, 'password')} className={style.iconPassword}> 
                            {this.state.passwordShown ? <VisibilityOutlinedIcon fontSize="small"/> : <VisibilityOffOutlinedIcon fontSize="small" />}
                        </i>
                    </div>

                    <div className={style.containerInput}>
                        <input 
                            id='confirmPassword' 
                            name='confirmPassword'
                            type={this.state.confirmPasswordShown ? 'text' : 'password'} 
                            placeholder='a'
                            onChange={this.handleChange}
                            className={style.input}
                        />
                        
                        <label htmlFor='confirmPassword' className={style.label}>
                            Confirm password
                        </label>

                        <i onClick={(e) => this.togglePaswordVisibility(e, 'confirmPassword')} className={style.iconPassword}> 
                            {this.state.confirmPasswordShown ? <VisibilityOutlinedIcon fontSize="small"/> : <VisibilityOffOutlinedIcon fontSize="small" />}
                        </i>

                        {/*En onClick de <i /> se debe hacer una arrow function porque react solo me envia el parametro 'e', si quiero que use otro parametro se lo tengo que aclarar asi*/}

                    </div>

                    <div className={style.containerInputDate}>
                        
                        <label htmlFor='birthday' className={style.labelDate}>
                            Birthday
                        </label>

                        <input 
                            type='date' 
                            min="1930-01-01" max="2022/07/14"
                            name= 'birthday'
                            id='birthday'
                            onChange={this.handleChange}
                            className={style.inputDate}
                        />
                    
                    </div>
                
                    <div className={style.containerRadio}>

                        <label htmlFor='female'className={style.labelRadio}>
                            <input type='radio' name='gender' value='female' required/>
                            Female
                        </label>

                        <label htmlFor='male' className={style.labelRadio}> 
                            <input type='radio'  name='gender' value='male' />
                            Male
                        </label>

                        <label htmlFor='other' className={style.labelRadio}> 
                            <input type='radio'  name='gender' value='other' />
                            Other
                        </label>

                    </div>

                    <input 
                        type='submit' 
                        value='Sign Up'
                        className={style.submitButton}
                    />

                </form>
                {this.state.redirect ? <Navigate to='/profile'/> : null}
            
            </div>
        )
    }
}

export default SignUp
