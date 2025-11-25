import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import GoChat from "../components/goChat";

export default function HistoryPage() {
    const { userId } = useParams();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/historico/${userId}`)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar histórico: ", err);
                setLoading(false);
            }, [userId]);
    });

    if (loading) {
        return (
            <main className="container py-5">
                <h3>Carregando histórico...</h3>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </main>
        )
    }

    return (
        <main className="container py-4 d-flex flex-column align-items-center" style={{ height: "92vh" }}>
            <h2 className="mb-4 align-self-start">Histórico do usuário {userId}</h2>
            {messages.length === 0 ? (
                <p className="text-muted align-self-start">Nenhuma mensagem encontrada 😑</p>
                
            ) : (
                // Lista histórico de mensagens
                <ul className="list-group overflow-auto w-100" style={{maxHeight: "75%"}}>
                    {messages.map((msg) => (
                        <li key={msg.id} className="list-group-item">
                            <strong>Usuário {msg.usuario}:</strong> {msg.texto}
                            <br />
                            <small className="text-muted">{msg.criado_em}</small>
                        </li>
                    ))}
                </ul>
            )}
            <GoChat messages={messages} />
        </main>
    )
}