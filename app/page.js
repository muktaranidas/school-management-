
import { Nunito_Sans} from 'next/font/google'
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import VideoGallary from './components/VideoGallary/VideoGallary';
import ImportantLink from './components/ImportantLink/ImportantLink';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
const nunitoSans
= Nunito_Sans({
  weight: '400',
  subsets: ['cyrillic'],
})

export default function Home() {
  return (
    <div className={nunitoSans.className }>
      <Navbar></Navbar>
      <Menu></Menu>
      <Message></Message>
      <About></About>
      <ImportantLink></ImportantLink>
      <VideoGallary></VideoGallary>
      <ImportantLink></ImportantLink>
      <Footer></Footer>
      
    </div>
  );
}
