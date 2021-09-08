import { useParams } from 'react-router-dom';

// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';


import logoImg from '../assets/images/logo.svg';
import '../styles/room.scss';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>();
    const roomId = params.id;

    // const {user} = useAuth();
    const { questions, title } = useRoom(roomId);


    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode  code={roomId}/>
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>(Admin) Sala {title}</h1>
                    {questions.length > 0 && (
                        <span>
                            {questions.length} Pergunta{questions.length === 1 ? '' : 's'}
                        </span>
                    )}
                </div>
    
                <div className="question-list">
                    {questions.map(question => {
                        return (
                        <Question 
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        >
                            <button></button>
                        </Question> 
                        )
                    })}
                </div>

            </main>
        </div>
    );
}