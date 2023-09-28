import '@/styles/globals.css'

//SASS
import '../styles/Home.css'
import '../styles/Footer.css'
import '../styles/About.css'
import '../styles/ContactUs.css'
import '../styles/Content.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
