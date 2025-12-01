import styles from './css/Sobre.module.css';
import imagemSobre from '../assets/imagens/Sobre.png';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.sobre_texto}>
        <h2>Sobre Nós</h2>
        <p>
          No CoTasks, acreditamos que a produtividade pode ser simples e colaborativa. 
          Nosso objetivo é ajudar você a organizar suas tarefas de forma prática, 
          compartilhar listas com amigos ou colegas e nunca perder o foco no que realmente importa.
        </p>
        <p>
          Criamos soluções intuitivas para quem quer gerenciar melhor seu tempo e suas atividades,
          sem complicações. Com o CoTasks, você transforma suas ideias em ações!
        </p>
      </div>

      <div className={styles.sobre_imagem}>
        <img src={imagemSobre} alt="Sobre Nós" />
      </div>
    </section>
  );
}

export default Sobre;
