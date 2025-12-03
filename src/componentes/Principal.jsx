import styles from './css/Principal.module.css'
import imagemPrincipal from '../assets/imagens/Lado_da_home_page.png'
import { Link } from "react-router-dom";

function Principal() {
    return (
        <section class={styles.principal}>
            <div class={styles.principal_texto}>
                <h1>Organize suas tarefas sozinho ou em conjunto</h1>
                <p>Crie, compartilhe e gerencie listas de tarefas com sua equipe em um só lugar</p>
                
                <Link to="criar-lista">
                    <button class={styles.principal_botao}>Criar uma lista</button>
                </Link>
            </div>
            
            <div class={styles.principal_imagem}>
                <img src={imagemPrincipal} alt="Imagem Principal" />
            </div>
            
        </section>
    )
}

export default Principal