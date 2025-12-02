import styles from './css/Header.module.css';
import { Link } from "react-router-dom";
import Logo_CoTask from '../assets/imagens/Logo_CoTask.png';

function Header() {
    return (

        <header>
            <div>
                <img src={Logo_CoTask} alt="Logo" />
            </div>

            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>

            <div className={styles.usuarios}>
                <Link to="/login">
                    <button className={styles.login}>Login</button>
                </Link>
                <Link to="/cadastro">
                    <button className={styles.cadastrar}>Cadastrar</button>
                </Link>
            </div>
        </header>

    )
}

export default Header;