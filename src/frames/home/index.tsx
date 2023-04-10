import React from "react";
import Image from "next/image"
import { HomeFrameProps } from "./@types/types"
import styles from "./styles.module.css"
import Botao from "../../components/botao";
import { FeedbacksUsuarios } from "../../pages/home/@types/types";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

const HomeFrame = ({ feedbacksUsuarios }: HomeFrameProps) => {

  return (
    <div>
      <NavBar />

      <main>
        <div className={styles.containerCentral}>
          <section className={styles.section}>
            <div className={styles.banner}>
              <Image priority placeholder="empty" className={styles.imgBanner} fill src="/assets/img-principal.png" alt="banner principal" />

              <div className={styles.divConteudoBanner}>
                <p className={styles.paragrafoPrincipal}>
                  A solução completa em sistemas para o seu Escritório Contábil e ERP
                </p>

                <p className={styles.paragrafoSecundario}>
                  Mensagens e chamadas privadas simples, seguras e gratuitas*, disponíveis em todo o mundo.
                </p>

                <Botao bgColor='azul' icone>Baixar</Botao>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.gridInfosSuper}>
              <div className={styles.subGridEsquerda}>
                <p className={styles.subGridEsquerdaTitulo}>
                  Somos Super!
                </p>

                <p className={styles.subGridEsquerdaParagrafo}>
                  A Nooven Sistemas é um conjunto de programas para <strong> gestão do ser negócio 100% online </strong>. Você gerencia sua empresa ou escritório contábil através de qualquer dispositivo conectado à internet de um jeito simples, prático e acessível.
                </p>

                <p className={styles.subGridEsquerdaParagrafo}>
                  A Economia é surpreendente, ideal para pequenas e médias empresas do segmento empresarial ou contábil.
                </p>
              </div>

              <div className={styles.subGridDireita}>
                <div className={styles.subGridDireitaItem}>
                  <Image className={styles.subGridDireitaItemIcone} width={20} height={25} src='/assets/img-cadeado.png' alt="icone cadeado" />

                  <p className={styles.subGridDireitaItemTitulo}>
                    30 anos de experiência
                  </p>

                  <p className={styles.subGridDireitaItemDesc}>
                    Possuímos um grande conhecimento do mercado contábel e empresarial.
                  </p>
                </div>

                <div className={styles.subGridDireitaItem}>
                  <Image className={styles.subGridDireitaItemIcone} width={20} height={25} src='/assets/img-cadeado.png' alt="icone cadeado" />
                  <p className={styles.subGridDireitaItemTitulo}>
                    Suporte diferenciado
                  </p>

                  <p className={styles.subGridDireitaItemDesc}>
                    Nosso suporte é ilimitado e preparado para sempre te surpeender.
                  </p>
                </div>

                <div className={styles.subGridDireitaItem}>
                  <Image className={styles.subGridDireitaItemIcone} width={20} height={25} src='/assets/img-cadeado.png' alt="icone cadeado" />

                  <p className={styles.subGridDireitaItemTitulo}>
                    Segurança garantida
                  </p>

                  <p className={styles.subGridDireitaItemDesc}>
                    Contamos com os melhores servidores e profissionais para proteger seus dados com segurança.
                  </p>
                </div>

                <div className={styles.subGridDireitaItem}>
                  <Image className={styles.subGridDireitaItemIcone} width={27} height={25} src='/assets/img-carteira.png' alt="icone cadeado" />

                  <p className={styles.subGridDireitaItemTitulo}>
                    Acessível
                  </p>

                  <p className={styles.subGridDireitaItemDesc}>
                    Proposta de planos com menor custo e grande prestação de serviço.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionSsLegis}>
            <div className={styles.imgSsLegisContainer}>
              <Image className={styles.imagem} sizes="50vw" fill src="/assets/img-notebook-consultoria.png" alt="imagem notebook consultoria legislativa" />
            </div>

            <div className={styles.textoSsLegis}>
              <p className={styles.tituloSsLegis}>
                SSLEGIS
              </p>

              <p className={styles.subTituloSsLegis}>
                Consultoria legislativa para a sua empresa
              </p>

              <p className={styles.descricaoSsLegis}>
                Consultoria nas áreas trabalhista, previdenciária e fisco-contábil oferecendo aos gestores subsídios necessários para atender às exigências do governo.
              </p>
            </div>
          </section>
        </div>

        <section className={styles.sectionAutomatiza}>
          <div className={styles.containerCentralAutomatiza}>
            <div className={styles.textosAutoma}>
              <p className={styles.tituloAutoma}>
                Automatize todas as áreas da <span className={styles.substringTitulo}>sua empresa</span>
              </p>

              <p className={styles.subTituloAutoma}>
                Tenha total controle de todos os processos da sua empresa e aumente os seus resultados com um sistema que cresce com você.
              </p>

              <Botao bgColor='azul-escuro'>Saiba mais</Botao>
            </div>

            <div className={styles.imgContainerAtendente}>
              <Image className={styles.imagemAtendente} sizes="50vw" fill src="/assets/img-atendente.png" alt="imagem atendente" />
            </div>
          </div>
        </section>

        <section className={styles.sectionFeedbacksFooter}>
          <div className={styles.containerCentral}>
            <div className={styles.feedbackContainer}>
              <p className={styles.feedbackTitulo}>
                Somos mais de 7 mil clientes
              </p>

              <p className={styles.feedbackSubtitulo}>
                Estamos presentes em todo território nacional ajudando <br /> profissionais a alcançarem o sucesso de suas empresas
              </p>

              <section className={styles.cardsFeedbackContainer}>
                {
                  feedbacksUsuarios?.map((feedback: FeedbacksUsuarios) => {
                    return (
                      <article key={feedback.id} className={styles.cardFeedback}>
                        <Image className={styles.feedbackAspas} width={34} height={41} src="/icones/aspas.svg" alt="imagem aspas" />

                        <p className={styles.feedbackDescricao}>
                          {feedback.descricao}
                        </p>

                        <div className={styles.usuarioFeedback}>
                          <Image className={styles.triangulo} width={100} height={130} src={`/assets/triangulo-feedback.png`} alt="foto usuário feedback" />

                          <Image className={styles.fotoUsuarioFeedback} width={55} height={55} src={`/assets/usuario${feedback.id}.png`} alt="foto usuário feedback" />

                          <span className={styles.dadosUsuarioFeedback}>
                            <p className={styles.nomeUsuario}>
                              {feedback.nome}
                            </p>
                            <p className={styles.nomeCompletoUsuario}>
                              {feedback.nome + ' ' + feedback.sobrenome}
                            </p>
                          </span>
                        </div>
                      </article>
                    )
                  })
                }
              </section>

              <Footer />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomeFrame
