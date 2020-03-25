import React, {useState} from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'

import './styles.css';

import api from '../../services/api'


function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(''); 
    
    const history = useHistory();
        
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident() {

        const data = {
            title, 
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                }
            })
            history.push('/profile');
        }
        catch(err){
            alert('Erro ao cadastrar caso')
        }
    }
    
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
                <form onSubmit= {handleNewIncident}>
                    <input 
                        placeholder="Title"
                        value={title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange = {e => setDescription(e.target.value)} 
                    
                    />

                    <input 
                        placeholder="Value"
                        value={value}
                        onChange = {e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit"> register </button>
                </form>

            </div>
        </div>
    );
}

export default NewIncident;