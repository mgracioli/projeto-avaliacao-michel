type FeedbacksUsuarios = {
  nome: string,
  sobrenome: string,
  descricao: string
}

export type HomeFrameProps = {
  feedbacksUsuarios: Array<FeedbacksUsuarios>
}
