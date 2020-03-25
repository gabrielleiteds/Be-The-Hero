import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';


import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(){

    const [id, setId] = useState(); 
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ongId', id); 
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch(err) {
            alert('Fail Login'); 
        }
    }

    return(
        <div className="logon-container">
            
            <section className='form'>
                <img src={logoImg} alt='Be The Hero'/>
                <form onSubmit={ handleLogin }>
                    <h1>Logon</h1> 

                    <input 
                        placeholder='your ID'
                        value = { id }
                        onChange = {e => setId(e.target.value)} 
                    />
                    <button type='submit' className='button'>Log in</button>
                    <Link className="back-link" to='/register'>
                        <FiLogIn size={16} color="#E02041" />
                        I don't have a registration
                    </Link>
                </form>
            </section>

            <img src= {heroesImg} alt="Heroes" />
        </div>
    );

}

export default Logon;