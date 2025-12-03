import styles from './css/Criarlista.module.css';

function Criarlista() {
    return (
        <main className={styles.container}>
            <div className={styles.lista}>
                <h1>CriarLista</h1>
                <p>Adicione itens à sua lista clicando nos campos abaixo.</p>

                <div className={styles.caixa}>
                    <input type="text" placeholder="Item 1" />
                    <input type="text" placeholder="Item 2" />
                    <input type="text" placeholder="Item 3" />
                    <input type="text" placeholder="Item 4" />
                    <input type="text" placeholder="Item 5" />
                    <input type="text" placeholder="Item 6" />
                    <input type="text" placeholder="Item 7" />
                    <input type="text" placeholder="Item 8" />
                    <input type="text" placeholder="Item 9" />
                    <input type="text" placeholder="Item 10" />
                </div>
            </div>
        </main>
    )
}

export default Criarlista;