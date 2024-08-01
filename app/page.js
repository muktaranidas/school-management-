import { Nunito_Sans} from 'next/font/google'
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import VideoGallary from './components/VideoGallary/VideoGallary';
import ImportantLink from './components/ImportantLink/ImportantLink';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Gallery from './components/Gallery/Gallery';

const nunitoSans
= Nunito_Sans({
  weight: ['400',"300","500", "600", "700", "800", "900"],
  subsets: ['cyrillic'],
})
export default function Home() {
  return (
    <div className={`${nunitoSans.className} ` } >
      <Navbar></Navbar>
      <Banner></Banner>
      <Message></Message>
      <About></About>
      <Gallery></Gallery>
      <VideoGallary></VideoGallary>
      <ImportantLink></ImportantLink>
      <Footer></Footer>
    </div>
  );
}
