
import { Nunito_Sans} from 'next/font/google'
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import VideoGallary from './components/VideoGallary/VideoGallary';
const nunitoSans
= Nunito_Sans({
  weight: '400',
  subsets: ['cyrillic'],
})

export default function Home() {
  return (
    <div className={nunitoSans.className }>
      <Navbar></Navbar>
      <Message></Message>
      <VideoGallary></VideoGallary>
    </div>
  );
}
