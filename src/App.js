import './App.css';
import Navbar from './components/navbar/navbar'
import Left from './components/left/Left'
import Right from './components/right/Right'
import Articles from './components/articles/articles';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='main'>
        <div className='left'>
          <Left />
        </div>

        <div className='articles'>
          <Articles />
        </div>

        <div className='right'>
          <Right />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
