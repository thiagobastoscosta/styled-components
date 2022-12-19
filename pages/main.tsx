import NextPage from 'next'
import Image from 'next/image'
import GlobalStyle from './global.tsx'


const Main = styled.div`

`
const Title = styled.h1`

`
const Contorno = styled.div`
  width:100%;
  height:300px;
  display:flex;
  justify-content:center;
  align-items:center;
`


export default () => (
  <GlobalStyle>
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
    border - radios: 10px;
  }
    />
    </Contorno>
    <Texto>sou Thiago Bastos</Texto>

    <p className={styles.description}>
    Crio sites
    </p>
  </GlobalStyle>
)