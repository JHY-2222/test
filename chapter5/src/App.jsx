import './App.css'
import Header from './component/Header'
// import Body from './component/Body';
// import MemberRegist from './component/MemberRegist';
import Refex from './component/Refex';
import Footer from './component/Footer';

function ChildComp() {
  return <div>child component</div>
}

function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <Body /> */}
      {/* <MemberRegist /> */}
      <Refex />
      <Footer/>
    </div>
  );
}

export default App
