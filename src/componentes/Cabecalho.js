import './Cabecalho.css';

export function Cabecalho({src,alt,busca}) {
  return(
    <header>
      <nav>
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
          <li>Topic 4</li>
        </ul>
      </nav>
      <image>
        <img src={src} alt={alt}></img>
      </image>
      <div className='buscar'>
        <input type="search" placeholder="Buscar" value={busca}/>
      </div>
    </header>
  );
}