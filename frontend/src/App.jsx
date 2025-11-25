import { useState } from 'react'
import Header from "./components/Header"
import ChatPage from "./pages/ChatPage"
import HistoryPage from "./pages/HistoryPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "80vh" }}>
            <h1>Bem-vindo ao MeuChat 😁</h1>
            <h4 className='text-body-tertiary'>Selecione um usuário no topo para começar!</h4>
          </div>
        } />
        <Route path='/chatpage/:userId' element={<ChatPage user={user} setUser={setUser} />} />
        <Route path='/historico/:userId' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
