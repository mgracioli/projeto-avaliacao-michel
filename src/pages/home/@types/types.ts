export type FeedbacksUsuarios = {
  id: number,
  nome: string,
  sobrenome: string,
  descricao: string
}

export type HomePageProps = {
  feedbacksUsuarios: Array<FeedbacksUsuarios>
}
