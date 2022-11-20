import Logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={Logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por <a href="https://www.linkedin.com/in/willey-silva-braz-499447135/" target="_blank">Willey Braz</a>
              <br />
              Credits to <a href="https://www.instagram.com/devsuperior.ig" target="_blank">@devsuperior.ig</a>
            </p>
        </div>
    </header>
  )
}

export default Header;