import React, {useState, useEffect} from 'react';

import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

function Profile() {
    
    const [incidents, setIncidents] = useState([])
    
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName');

    const history = useHistory(); 
    useEffect (() => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(Response => {
            setIncidents(Response.data);
        })
    }, [ongId]);

    async function handleDelete(id) {
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId, 
                }
            }); 
            setIncidents(incidents.filter(incident => incident.id !== id))
        }
        catch(err) {
            alert('Error delete');
        }
    }


    function handleLogout() {
        localStorage.clear();
        history.push('/'); 
    }

    return (
        <div className='profile-container'>
            <header> 
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome , {ongName}</span>

            <Link className="button" to='/incidents/new'>
                Register new case 
            </Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>
            </header>

            <h1>Registered cases</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Case: </strong>
                    <p>{incident.title}</p>

                    <strong>Description: </strong>
                    <p>{incident.description}</p>

                    <strong>Value: </strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDelete(incident.id)} type='button'>
                       <FiTrash2  size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                ))}  
            </ul>
        </div>
    );

}

export default Profile;