import './Rodape.css'
export function Rodape ({src,alt}){
  return(
    <footer>
      <p>Trabalho da Disciplina de Frameworks front end: React</p>
      <img src={src} alt={alt}></img>
    </footer>
  );

}