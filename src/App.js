import './global.css'
import Header from './components/header'
import Banner from './components/banner';
import TrustedBy from './components/trusted_by';
import Everything from './components/everything';
import Intuitive from './components/intuitive';
import AskQuestion from './components/ask_question';
import GetInstant from './components/get_instant';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className='body_gradient'>
        <TrustedBy/>
        <Everything/>
        <Intuitive/>
        <AskQuestion/>
        <GetInstant/>
        <Footer/>
      </div>
    </>
  );
}

export default App;


// Trusted by the world’s most innovative teams