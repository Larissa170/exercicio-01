import logo from './logo.svg';
import './App.css';
import { Cabecalho } from './componentes/Cabecalho';
import { Menu } from './componentes/Menu';
import { Artigo } from './componentes/Artigo';
import im1 from './imgs/im1.webp';
import im2 from './imgs/im2.webp';
import im3 from './imgs/im3.jpg';
import img from './imgs/puc.jpg';
import { Lateral } from './componentes/Lateral';
import { Rodape } from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho src={logo} alt="Logo"></Cabecalho>
      <Menu></Menu>
      <div className='Corpo'>
        <div>
          <Artigo src={im1} alt="Imagem 1"></Artigo>
          <Artigo src={im2} alt="Imagem 2"></Artigo>
          <Artigo src={im3} alt="Imagem 3"></Artigo>
        </div>
        <Lateral></Lateral>
      </div>
      <Rodape src={img} alt="Puc"></Rodape>
    </div>
  );
}

export default App;
