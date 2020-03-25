import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'

import './styles.css';

function NewIncident() {

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be the Hero' />

                    <h1> Register New Case </h1>
                    <p> describe the case in detail to find a hero to solve this. </p>

                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Home 
                    </Link>


                </section> 
                <form>
                    <input placeholder="Title"/>
                    <textarea placeholder="Descrição" />

                    <input placeholder="Value"/>

                    <button className="button" type="submit"> register </button>
                </form>

            </div>
        </div>
    );
}

export default NewIncident;