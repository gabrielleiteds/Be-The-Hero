import React from 'react';

import { Link } from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be the Hero' />

                    <h1> Register </h1>
                    <p> register, enter the platform and help people find the cases of your ONG </p>

                    <Link className="back-link" to='/'>
                        <FiArrowLeft size={16} color="#E02041" />
                        Return 
                    </Link>


                </section> 
                <form>
                    <input placeholder="ONG Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input placeholder = "city" />
                        <input placeholder = "UF" style={{width: 80}} />
                    </div>

                    <button className="button" type="submit"> register </button>
                </form>

            </div>
        </div>
    );

}

export default Register; 