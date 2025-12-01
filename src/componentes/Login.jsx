import styles from "./css/Login.module.css";

function Login() {
  return (
    <section className={styles.loginSection} id="login">
      <div className={styles.card}>

        <h2 className={styles.title}>Entrar no CoTask</h2>

        <p className={styles.subtitle}>
          Acesse sua conta e organize suas tarefas facilmente.
        </p>

        <form className={styles.form}>
          <input type="email" placeholder="Seu e-mail" required />
          <input type="password" placeholder="Sua senha" required />

          <button type="submit" className={styles.btn}>Login</button>
        </form>

        <p className={styles.registerText}>
          Não tem conta? <a href="#cadastro">Criar conta</a>
        </p>

      </div>
    </section>
  )
}

export default Login