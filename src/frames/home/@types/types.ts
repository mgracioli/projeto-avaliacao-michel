type FeedbacksUsuarios = {
  id: number
  nome: string,
  sobrenome: string,
  descricao: string
}

export type HomeFrameProps = {
  feedbacksUsuarios: Array<FeedbacksUsuarios>
}
