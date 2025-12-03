import { Link } from "react-router-dom";
import styles from "./css/Cadastro.module.css";

function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <h2>Crie sua conta</h2>
                <p className={styles.subtitulo}>Comece a organizar suas tarefas com o CoTask</p>

                <form className={styles.forma}>
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Digite seu nome" />

                    <label>E-mail</label>
                    <input type="email" placeholder="Digite seu e-mail" />

                    <label>Senha</label>
                    <input type="password" placeholder="Crie uma senha" />

                    <Link to="/">
                        <button className={styles.Cadastrar}>Cadastrar</button>
                    </Link>
                    
                </form>

                <p className={styles.login}>
                    Já tem conta? <Link to="/login">Fazer Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Cadastro;
