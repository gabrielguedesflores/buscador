import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 90020024</h2>

        <span>Rua: Borges de Medeiros</span>
        <span>Complemento: Apto 402</span>
        <span>Centro Histórico</span>
        <span>Porto Alegre - RS</span>
      </main>
    </div>
  );
}

export default App;
