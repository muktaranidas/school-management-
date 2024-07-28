
import { Nunito_Sans} from 'next/font/google'
import Navbar from './components/Navbar/Navbar';
const nunitoSans
= Nunito_Sans({
  weight: '400',
  subsets: ['cyrillic'],
})

export default function Home() {
  return (
    <div className={nunitoSans.className }>
      <Navbar></Navbar>
    </div>
  );
}
