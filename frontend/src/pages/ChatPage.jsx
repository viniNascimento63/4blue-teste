import ChatWindow from "../components/ChatWindow"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function ChatPage({ user, setUser }) {
    const { userId } = useParams();

    useEffect(() => {
        setUser(userId);
    }, [userId]);

    function sendMessageToBackend(text, addBotMessage) {
        fetch("http://127.0.0.1:8000/api/enviar/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: userId,
                message: text,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.reply) {
                addBotMessage(data.reply); // 🔥 manda resposta para o ChatWindow
            }
        });
    }

    return (
        <main className="container">
            <div className="d-flex" style={{ height: "92vh" }}>
                <ChatWindow
                    user={user}
                    setUser={setUser}
                    sendMessageToBackend={sendMessageToBackend}
                />
            </div>
        </main>
    );
}