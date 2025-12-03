import styles from './css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.coluna}>
          <h2 className={styles.logo}>CoTask</h2>
          <p className={styles.desc}>
            Simplificando sua organização diária com listas inteligentes,
            colaboração e produtividade real.
          </p>
        </div>

        <div className={styles.coluna}>
          <h3>Links</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Planos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className={styles.coluna}>
          <h3>Suporte</h3>
          <ul>
            <li><a href="#">Central de ajuda</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Privacidade</a></li>
          </ul>
        </div>

        <div className={styles.coluna}>
          <h3>Social</h3>
          <ul>
            <li><a href="https://www.instagram.com/arthur_ap_dos_santos/followers/?next=%2F" target='_blank'>Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/arthur-aparecido-573558314/" target='_blank'>LinkedIn</a></li>
            <li><a href="https://github.com/ArthurApXbr" target='_blank'>GitHub</a></li>
          </ul>
        </div>

      </div>

      <div className={styles.copyright}>
        <p> © CoTask • Todos os direitos reservados </p>
      </div>

    </footer>
  )
}

export default Footer;
