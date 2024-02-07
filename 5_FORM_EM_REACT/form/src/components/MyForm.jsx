import { useState } from 'react'
import React from './MyForm.css'

function MyForm({user}) {
    // 3 - Gerenciamento de dados

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setBio("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("envinando o formulário");
        console.log(name, email, bio, role);
        clearForm();
    }

  return (
    <div>
        
        {/*1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>

            {/*2 - label envolvendo o input */}
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>

            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
                <span>Função</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="Editor">Editor</option>
                    <option value="Admin">Administrador</option>
                </select>
            <label>

            </label>

            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}

export default MyForm