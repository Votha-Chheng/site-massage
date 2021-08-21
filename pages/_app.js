import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        <meta name="description" content="Envie d'un massage ou d'un moment propice à la détente sur Arles et la région des Alpilles ?... Baux'T des sens vous propose des séances de massage à domicile et d'initiation au Hata yoga."/>
        <meta property="og:title" content="Baux'T des sens, massage à domicile et yoga Arles Alpilles & Baux de Provence." />
        <meta property="og:image" content="https://zupimages.net/up/21/33/4t0a.jpg"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Meie+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet/css" href='/global.css'/>
        <link rel="icon" href="/images/logoLotus.svg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
        <title>Massage à domicile et yoga</title>
      </Head>

      <main>
        <Component {...pageProps}/> 
      </main>
    </>
  )
}

export default MyApp
