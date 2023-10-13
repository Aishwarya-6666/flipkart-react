import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/Banner.js';
import Products from './components/Products.js';
import Form from './components/Form';
import './css/bh.css'

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/><br/>
                <Products/>
                <Form/>
        </div>
   </div>
   </>
  );
}

export default App;