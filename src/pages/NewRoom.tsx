import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
    const {user} = useAuth();
    const history = useHistory()

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(e: FormEvent) {
        e.preventDefault();
        
        if (newRoom.trim() === '') return;

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração para perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={(e) => handleCreateRoom(e)}>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        onChange={e => setNewRoom(e.target.value)}
                        value={newRoom}
                    />
                    <Button type="submit">
                        Criar sala
                    </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
                </div>
            </main>
        </div>
    )
}