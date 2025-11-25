import { useNavigate } from "react-router-dom";

export default function Header({ user, setUser }) {
    const navigate = useNavigate();
    function selecionarUsuario(id) {
        setUser(id);
        navigate(`/chatpage/${id}`);
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-primary justify-content-between">
                <div className="container">
                    <a className="navbar-brand text-light" href="/">MeuChat</a>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle text-light" href="/chatpage" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user ? `Usuário ${user}` : "Selecione um usuário"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => { selecionarUsuario("A") }}>Usuário A</button></li>
                                <li><button className="dropdown-item" onClick={() => { selecionarUsuario("B") }}>Usuário B</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}