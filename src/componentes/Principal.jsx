import styles from './css/Principal.module.css'
import imagemPrincipal from '../assets/imagens/Lado_da_home_page.png'

function Principal() {
    return (

        <section class={styles.principal}>
            <div class={styles.principal_texto}>
                <h1>Organize suas tarefas sozinho ou em conjunto</h1>
                <p>Crie, compartilhe e gerencie listas de tarefas com sua equipe em um só lugar</p>
                <button class={styles.principal_botao}>
                    Criar uma lista
                </button>
            </div>
            
            <div class={styles.principal_imagem}>
                <img src={imagemPrincipal} alt="Imagem Principal" />
            </div>

            
        </section>

    )
}

export default Principal