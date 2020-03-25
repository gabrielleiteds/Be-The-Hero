import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('')
    
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email, 
            whatsapp, 
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Your ID: ${response.data.id}`);
            history.push('/'); 
        }
        catch(err) {
            alert('error in register');
        }
        
    }
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
                <form onSubmit = { handleRegister }>
                    <input 
                        placeholder="ONG Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    
                    />
                    <input type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder = "city" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder = "UF" style={{width: 80}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            />
                    </div>

                    <button className="button" type="submit"> register </button>
                </form>

            </div>
        </div>
    );

}

export default Register; 