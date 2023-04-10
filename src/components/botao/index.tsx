import Image from "next/image";
import { Botaoprops } from "./@types/types";
import styles from "./styles.module.css"

const Botao = ({ icone, bgColor, children, ...rest }: Botaoprops) => {

  return (
    icone ?
      <button className={`${styles.btn} ${styles[bgColor]}`} {...rest}>
        <span>{children}</span>
        {
          bgColor !== 'verde' ?
            <Image width={13} height={13} src="/icones/download1.svg" alt="icone download" />
            :
            <Image width={13} height={13} src="/icones/download2.svg" alt="icone download" />
        }
      </button>
      :
      <button className={`${styles.btn} ${styles[bgColor]}`} {...rest}>{children}</button>
  )
}

export default Botao;
