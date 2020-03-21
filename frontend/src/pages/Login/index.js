import React, { useState } from 'react';

import api from '../../services/api';

export default function Login( {history} ){
    
    const [email, setEmail] = useState('');  

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/sessions', {email});
        const { _id } = response.data

        localStorage.setItem('user', _id);
        history.push('/dashboard');
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Seu melhor e-mail"
                />
                <button 
                    className="btn"
                    type="submit">Entrar
                </button>
            </form>
        </>
    )
}