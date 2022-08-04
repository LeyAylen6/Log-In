import React from 'react';
import style from './profile.module.css'
import imageOther from "./../images/userDefault.png"
import imageFemale from './../images/userFemale.jpeg'
import imageMale from './../images/userMale.jpg'
// los "p" de los datos se convierten en inputs cuando
// el usuario quiere cambiar los datos

const images = {
    'other': imageOther,
    'female': imageFemale,
    'male': imageMale
}

class Profile extends React.Component {
    constructor(props) {
        super (props);
    
        this.state = {
            firstName: 'Leila',
            lastName: 'Salguero',
            email: 'leiisalguero@gmail.com',
            username: 'LeyAylen6',
            password: 'Hola',
            birthday: '25/04/2000',
            gender: 'female',
            button: true
        }
        this.handleButton = this.handleButton.bind(this);

    }

    handleButton(e) {
        e.preventDefault()
        this.setState ({
            ...this.state,
            button: !this.state.button 
        })
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.imgUsername}>
                    <div className={style.containerImg}>

                        <img 
                        src= {images[this.state.gender]} //Busca en const images el gender que coincida con el nombre de la imagen.
                        alt='Profile picture' 
                        className={style.img}
                        />

                    </div>

                    <h1>{this.state.username}</h1>    
                </div>

                <div>
                    <div>
                        <label>
                            First Name
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.firstName}</p> }
                    </div>


                    <div>
                        <label>
                            Last Name
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.lastName}</p> }
                    </div>

                    <div>
                        <label>
                            Email
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.email}</p> }
                    </div>

                    <div>
                        <label>
                            Password
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.password}</p> }
                    </div>

                    <div>
                        <label>
                            Birthday
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.birthday}</p> }
                    </div>

                    <div>
                        <label>
                            Gender
                        </label>

                        {this.state.button ? <input type='text' /> : <p>{this.state.gender}</p> }
                    </div>
                </div>

                <button onClick={this.handleButton}>
                    Editar
                </button>

            </div>
        )
    }
}

export default Profile;