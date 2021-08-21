import { useContext } from 'react';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
    const {user} = useContext(AuthContext);
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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
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