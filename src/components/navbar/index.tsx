import Image from "next/image"
import styles from "./styles.module.css"
import Link from "next/link"
import Botao from "../botao"
import Select from "../select"

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.containerNav}>
        <div className={styles.imgContainer}>
          <Image width={138} height={25} src="/assets/logo-super-azul.png" alt="logotipo Super Soft" />
        </div>

        <ul className={styles.listaNavLinks}>
          <li className={styles.navLi} id="0">
            <Select
              tipo="navlink"
              opcoes={[
                { id: 0, descricao: 'Recursos' },
                { id: 1, descricao: 'Recursos2' },
                { id: 2, descricao: 'Recursos3' }
              ]}
            />
          </li>
          <li className={styles.navLi} id="1">
            <Link className={styles.navLink} href='#'>Privacidade</Link>
          </li>
          <li className={styles.navLi} id="2">
            <Link className={styles.navLink} href='#'>Central de ajuda</Link>
          </li>
          <li className={styles.navLi} id="3">
            <Link className={styles.navLink} href='#'>Blog</Link>
          </li>
          <li className={styles.navLi} id="4">
            <Link className={styles.navLink} href='#'>WhatsApp Web</Link>
          </li>
        </ul>

        <Botao bgColor="azul" icone>Baixar</Botao>
      </div>
    </nav>
  )
}

export default NavBar
