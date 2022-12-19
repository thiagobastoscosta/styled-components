import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './header'

import styled from 'styled-components';
import vercel from '../rosto.jpg'
import Head from './head.tsx'
import GlobalStyle from './global.tsx'
import Main from './main.tsx'

const Texto = styled.h1`
  color:darkblue;
  font-size:50px;
`
const Box = styled.div`
  width:100vw;
  height:5vh;
  background-color:darkgreen;
`
const Contorno = styled.div`
  width:100%;
  height:300px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const MainIndex = styled.div`
width:100%;
height:100%;
background-color:geen;
`
export default () => (
  <MainIndex>
    <Head />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>
        Bem Vindo ao Portfolio
      </h1>
      <Contorno>
        <Image
          alt="Next.js logo"
          src={vercel}
          width={160}
          height={260
            styles={
            border - radius:10px;
            }
          />
      </Contorno>
      <Texto>sou Thiago Bastos</Texto>

      <p className={styles.description}>
        Crio sites
      </p>

      <Box></Box>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://docs.replit.com/category/hosting"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            This website automatically deployed on Replit by hitting the run button!
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="/__repl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built on
        <span className={styles.logo}>
          <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
        </span>
        Replit
      </a>
    </footer>

  </MainIndex>
)



