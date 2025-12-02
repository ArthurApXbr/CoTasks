import styles from './css/Planos.module.css';

function Planos() {
  return (
    <section className={styles.planos}>
      <h2>Nossos Planos</h2>
      <p className={styles.subtitulo}>
        Escolha o plano ideal para melhorar sua produtividade e organização.
      </p>

      <div className={styles.cardsContainer}>

        <div className={styles.card}>
          <h3>Plano Básico</h3>
          <p className={styles.preco}>Grátis</p>
          <p className={styles.desc}>
            Ideal para quem quer começar a organizar suas tarefas de forma simples.
          </p>

          <ul>
            <li>Listas ilimitadas</li>
            <li>Compartilhamento via link</li>
            <li>Marcações de concluído</li>
            <li>Tema padrão</li>
            <li>Sem filtros avançados</li>
          </ul>

          <button>Começar Agora</button>
        </div>

        <div className={styles.card}>

          <h3>Plano Pro</h3>
          <p className={styles.preco}>R$ 14,99/mês</p>
          <p className={styles.desc}>
            Para quem quer mais controle, personalização e eficiência no dia a dia.
          </p>

          <ul>
            <li>Tudo do plano Básico</li>
            <li>Categorias personalizadas</li>
            <li>Filtros e prioridades</li>
            <li>Temas exclusivos</li>
            <li>Notificações inteligentes</li>
          </ul>

          <button className={styles.btnDestaque}>Assinar Agora</button>
        </div>

        <div className={styles.card}>
          <h3>Plano Equipe</h3>
          <p className={styles.preco}>R$ 29,99/mês</p>
          <p className={styles.desc}>
            Perfeito para grupos, equipes e projetos colaborativos.
          </p>

          <ul>
            <li>Tudo do plano Pro</li>
            <li>Multiplos usuários</li>
            <li>Comentários nas tarefas</li>
            <li>Gestão de projetos</li>
            <li>Painel administrativo</li>
          </ul>

          <button>Assinar Agora</button>
        </div>

      </div>
    </section>
  )
}

export default Planos;
