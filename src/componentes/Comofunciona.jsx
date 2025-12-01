import styles from './css/Comofunciona.module.css';

// importe suas imagens
import img1 from '../assets/imagens/tarefas1.png';
import img2 from '../assets/imagens/tarefas2.png';
import img3 from '../assets/imagens/tarefas3.png';

function Comofunciona() {
  return (
    <section className={styles.comoFunciona}>
      <h2>Como funciona?</h2>

      <p className={styles.subtitulo}>
        Conectando quem precisa de acessibilidade com <br />
        intérpretes de Libras capacitados.
      </p>

      <div className={styles.passos}>

        <div className={styles.card}>
          <img src={img1} alt="Passo 1" />
          <h3>PASSO 1 — Crie sua lista</h3>
          <p>
            Comece criando uma lista personalizada para organizar suas tarefas. Dê um nome, escolha a categoria e adicione tudo que precisa fazer no seu dia, semana ou projeto.
          </p>
        </div>

        <div className={styles.card}>
          <img src={img2} alt="Passo 2" />
          <h3>PASSO 2 — Organize e acompanhe</h3>
          <p>
            Marque tarefas como concluídas, defina prioridades e acompanhe seu progresso em tempo real. Tudo de forma simples e visual, sem complicações.
          </p>
        </div>

        <div className={styles.card}>
          <img src={img3} alt="Passo 3" />
          <h3>PASSO 3 — Compartilhe com quem quiser</h3>
          <p>
            Gere um link exclusivo e compartilhe sua lista com amigos, colegas ou equipes. Todos acompanham junto, facilitando colaboração e produtividade.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Comofunciona;
