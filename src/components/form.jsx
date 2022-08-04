import React from 'react'
import style from './login.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const inputData = [
    {
        label: 'First Name',
        id: 'first-name',
        type: 'text',
        onChange: function(){},
        value: "",
    },
    {
        label: 'Lastname',
        id: 'last-name',
        type: "text",
        onChange: function(){},
        value: '',
    },
    {
        label: 'Username',
        id: 'first-name',
        type: 'text',
        onChange: function(){},
        value: '',
    },
    {
        label: 'Password',
        id: 'first-name',
        type: 'password',
        onChange: function(){},
        value: '',
        passwordShown: false,
    },
]

function createInput(inputData) {
    switch(inputData.type){
        case "text":
            return(
                <div className={style.containerInput}>
                    
                    <input 
                        type='text' 
                        name={inputData.id}
                        id={inputData.id}
                        value={inputData.value} 
                        onChange={inputData.onChange}
                        placeholder='a'
                        className={style.input}
                    /> 

                    <label htmlFor={inputData.id} className={style.label}>
                        {inputData.label}
                    </label>

                </div>
            )

        case "password":
            <div className={style.containerInput}>
                        
                    <input 
                        type={inputData.passwordShown ? 'text' : 'password'} 
                        name={inputData.id}
                        id={inputData.id}
                        value={inputData.value} 
                        onChange={inputData.onChange}
                        placeholder='a'
                        className={style.input}
                    /> 

                    <label htmlFor={inputData.id} className={style.label}>
                        {inputData.label}
                    </label>

                    <i onClick={this.togglePasswordVisibility} className={style.iconPassword}>
                        {this.state.passwordShown ? <VisibilityOutlinedIcon fontSize="small"/> : <VisibilityOffOutlinedIcon fontSize="small"/>}
                    </i>
                
                </div>
    }
}


class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={style.container}>
                <form className={style.form}>
                    {inputData.map(data => createInput(data))}
                </form>
            </div>
        )
    }
}

export default Form;