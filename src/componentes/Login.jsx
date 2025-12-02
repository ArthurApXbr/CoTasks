import styles from "./css/Login.module.css";

function Login() {
  return (
    <section className={styles.secaologin} id="login">
      <div className={styles.card}>

        <h2 className={styles.titulo}>Entrar no CoTask</h2>

        <p className={styles.subtitulo}>
          Acesse sua conta e organize suas tarefas facilmente.
        </p>

        <form className={styles.forma}>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit" className={styles.botao}>Login</button>
        </form>

        <p className={styles.registrar}>
          Não tem conta? <a href="/cadastro">Criar conta</a>
        </p>

      </div>
    </section>
  )
}

export default Login