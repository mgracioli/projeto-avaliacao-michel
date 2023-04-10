export type SelectProps = {
  tipo: 'footer' | 'navlink';
  opcoes: Array<objSelect>
}

type objSelect = {
  id: number,
  descricao: string
}
