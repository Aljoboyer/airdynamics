import '@/styles/globals.css'

//SASS
import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/About.css'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
