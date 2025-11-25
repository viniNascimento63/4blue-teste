import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function GoChat() {
    const { userId } = useParams();
    const navigate = useNavigate();

    function goChat(id) {
        navigate(`/chatpage/${id}`);
    }

    return (
        <button className="btn btn-primary btn-lg mt-2" title="Chat do usuário" onClick={() => goChat(userId)}>Go Chat!</button>
    );
}