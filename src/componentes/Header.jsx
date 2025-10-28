import styles from './css/Header.module.css';
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

            <div class={styles.usuarios}>
                <button class={styles.login}>Login</button>
                <button class={styles.cadastrar}>Cadastrar</button>
            </div>
        </header>

    )
}

export default Header;