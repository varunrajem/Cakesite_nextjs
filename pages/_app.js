import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footor from '../components/Footor'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footor />
    </>
  )
}
