import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ChatWindow({ user, sendMessageToBackend }) {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    function sendMessage(e) {
        e.preventDefault();
        const input = e.target.message.value.trim();

        if (!input) return;

        // Atualiza mensagens no frontend
        setMessages([...messages, { sender: "A", text: input }]);

        // Dispara função enviada pelo ChatPage (backend)
        sendMessageToBackend(input, addBotMessage);

        // Limpa o campo
        e.target.reset();
    }

    function addBotMessage(reply) {
        setMessages(prev => [...prev, { sender: "BOT", text: reply }]);
    }

    function historico() {
        navigate(`/historico/${user}`);
    }

    return (
        <div className="d-flex flex-column flex-grow-1 border rounded-bottom h-100">
            {/* Título */}
            <h2 className="text-center text-body-secondary p-2">Chat usuário {user}</h2>

            {/* lista de mensagens */}
            <div className="flex-grow-1 overflow-auto bg-light p-3 text-white">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-3 d-flex ${msg.sender !== "BOT" ? "justify-content-end" : "justify-content-start"}`}>
                        <div className="p-2 px-3 rounded d-inline-block bg-primary">
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input de mensagem */}
            <form onSubmit={sendMessage} className="d-flex border-top p-3">
                <input 
                    name="message" 
                    className="form-control me-2 p-2 px-3" 
                    placeholder="Digite sua mensagem..." 
                    autoComplete="off"
                />
                <button className="btn btn-primary px-4" type="submit" title="Enviar"><i className="bi bi-send"></i></button>
                <button className="btn btn-secondary ms-2" type="button" title="Histórico" onClick={historico}>
                    <i className="bi bi-clock-history"></i>
                </button>
            </form>
        </div>
    );
}