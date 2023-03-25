import './Artigo.css';
export function Artigo ({src,alt}){
  return(
    <article>
      <img src={src} alt={alt}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tempora quos animi iusto nemo eum dignissimos recusandae, laborum corrupti culpa aliquam quam delectus laboriosam a alias, est harum dolor ipsa reiciendis.
       </p>
    </article>
  );
}