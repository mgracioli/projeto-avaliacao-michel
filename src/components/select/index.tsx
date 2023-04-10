import { SelectProps } from "./@types/types"
import styles from "./styles.module.css"

const Select = ({ tipo, opcoes }: SelectProps) => {
  return (
    <select className={styles[`${tipo}`]}>
      {
        opcoes.map((opcao) =>
          <option
            selected={opcao.id[0]}
            key={opcao.id}
            value={opcao.id}
          >
            {opcao.descricao}
          </option>
        )
      }
    </select>
  )
}

export default Select
