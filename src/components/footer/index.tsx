import Image from "next/image";
import styles from "./styles.module.css"
import Botao from "../botao";
import Link from "next/link";
import Select from "../select";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInfosSuper}>
        <div className={styles.footerSuperior}>
          <section className={styles.sectionLogoBotaoFooter}>
            <Image width={192} height={35} src="/assets/logo-super.png" alt="logotipo Super Soft" />

            <Botao bgColor="verde" icone>Baixar</Botao>
          </section>

          <div className={styles.linksGerais}>
            <section>
              <p className={styles.tituloLinks}>O que fazemos</p>

              <ul className={styles.listaLinks}>
                <li className={styles.li} id="0">
                  <Link className={styles.link} href='#'>Recursos</Link>
                </li>
                <li className={styles.li} id="1">
                  <Link className={styles.link} href='#'>Blog</Link>
                </li>
                <li className={styles.li} id="2">
                  <Link className={styles.link} href='#'>Histórias</Link>
                </li>
                <li className={styles.li} id="3">
                  <Link className={styles.link} href='#'>Para empresas</Link>
                </li>
              </ul>
            </section>

            <section>
              <p className={styles.tituloLinks}>Quem somos</p>
              <ul className={styles.listaLinks}>
                <li className={styles.li} id="0">
                  <Link className={styles.link} href='#'>Sobre nós</Link>
                </li>
                <li className={styles.li} id="1">
                  <Link className={styles.link} href='#'>Carreiras</Link>
                </li>
                <li className={styles.li} id="2">
                  <Link className={styles.link} href='#'>Central de marcas</Link>
                </li>
                <li className={styles.li} id="3">
                  <Link className={styles.link} href='#'>Privacidade</Link>
                </li>
              </ul>
            </section>

            <section className={styles.colunaAjuda}>
              <p className={styles.tituloLinks}>Precisa de ajuda?</p>

              <ul className={styles.listaLinks}>
                <li className={styles.li} id="0">
                  <Link className={styles.link} href='#'>Fale conosco</Link>
                </li>
                <li className={styles.li} id="1">
                  <Link className={styles.link} href='#'>Central de ajuda</Link>
                </li>
                <li className={styles.li} id="2">
                  <Link className={styles.link} href='#'>Coronavírus</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className={styles.footerInferior}>
          <div className={styles.infosFooterInferior}>
            <p>2023 SuperSoft</p>
          </div>

          <div className={styles.infosFooterInferior}>
            <Link className={styles.linkTermos} href='#'>Termos de serviço</Link>
          </div>

          <div className={styles.divsVaziaContainer}>
            <div className={styles.divVazia} />
            <div className={styles.divVazia} />
            <div className={styles.divVazia} />
            <div className={styles.divVazia} />
          </div>

          <Select
            tipo="footer"
            opcoes={[
              { id: 0, descricao: 'Português (Brasil)' },
              { id: 1, descricao: 'Inglês' },
              { id: 2, descricao: 'Espanhol' }
            ]}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
