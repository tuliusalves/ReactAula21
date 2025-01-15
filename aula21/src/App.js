import logo from './logo.svg';
import './App.css';
import Componente1 from './components/Component1';
import TemaAtual from './components/TemaAtual';
import BotaoTrocaTema from './components/BotaoTrocaTema';

function App() {
  return (
    <div className="App">
      <Componente1></Componente1>
      <TemaAtual></TemaAtual>
      <BotaoTrocaTema></BotaoTrocaTema>
    </div>
  );
}

export default App;
