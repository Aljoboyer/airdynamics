import '@/styles/globals.css'

//SASS
import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/About.css'
import '../styles/ContactUs.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
