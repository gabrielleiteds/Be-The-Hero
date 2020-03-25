import React from 'react';

import { Link } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';

function Profile() {

    return (
        <div className='profile-container'>
            <header> 
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome , APAD</span>

            <Link className="button" to='/incidents/new'>
                Register new case 
            </Link>
            <button type="button">
                <FiPower size={18} color="#e02041" />
            </button>
            </header>

            <h1>Registered cases</h1>
            <ul>
                <li>
                    <strong>Case: </strong>
                    <p>Test Case</p>

                    <strong>Description: </strong>
                    <p>Test Description</p>

                    <strong>Value: </strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                       <FiTrash2  size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>Case: </strong>
                    <p>Test Case</p>

                    <strong>Description: </strong>
                    <p>Test Description</p>

                    <strong>Value: </strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                       <FiTrash2  size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>Case: </strong>
                    <p>Test Case</p>

                    <strong>Description: </strong>
                    <p>Test Description</p>

                    <strong>Value: </strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                       <FiTrash2  size={20} color="#a8a8b3"/> 
                    </button>
                </li>
                <li>
                    <strong>Case: </strong>
                    <p>Test Case</p>

                    <strong>Description: </strong>
                    <p>Test Description</p>

                    <strong>Value: </strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                       <FiTrash2  size={20} color="#a8a8b3"/> 
                    </button>
                </li>
            </ul>
        </div>
    );

}

export default Profile;