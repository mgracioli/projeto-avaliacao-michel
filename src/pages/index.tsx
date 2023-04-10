import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import HomePage from './home'
import { FeedbacksUsuarios, HomePageProps } from './home/@types/types'

const IndexPage: NextPage = ({ feedbacksUsuarios }: HomePageProps) => {
  return (
    <HomePage feedbacksUsuarios={feedbacksUsuarios} />
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async () => {
  let props = {
    feedbacksUsuarios: {} as Array<FeedbacksUsuarios>
  }

  //mock dos dados iniciais que seriam buscados na API
  const arrayFeedbacks = [
    {
      id: 0,
      nome: 'David',
      sobrenome: 'Ramirez',
      descricao: 'Os programas atendem todas as exigências que um Departamento Pessoal necessita. Na e-Contab eu encontrei a qualidade que a minha empresa precisa".',
      linkFoto: 'assets/usuario0'
    },
    {
      id: 1,
      nome: 'David',
      sobrenome: 'Ramirez',
      descricao: 'Os programas atendem todas as exigências que um Departamento Pessoal necessita. Na e-Contab eu encontrei a qualidade que a minha empresa precisa".',
      linkFoto: 'assets/usuario1'
    },
    {
      id: 2,
      nome: 'David',
      sobrenome: 'Ramirez',
      descricao: 'Os programas atendem todas as exigências que um Departamento Pessoal necessita. Na e-Contab eu encontrei a qualidade que a minha empresa precisa".',
      linkFoto: 'assets/usuario2'
    }
  ]

  props.feedbacksUsuarios = arrayFeedbacks

  return {
    props: {
      feedbacksUsuarios: props.feedbacksUsuarios
    }
  };
};
