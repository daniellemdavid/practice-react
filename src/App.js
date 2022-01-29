import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'
import PostBlock from './Pages/PostBlock'
import {navList} from './notion'
import './App.css';
import n from './notion';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact'
import Shop from './Pages/Shop';
import Home from './Pages/Home';

const notion  =  n();

const Nav = (props) => {
  return(
    <nav className='NavBlock'>
      <img src='favicon.ico'/>
    {props.links.map( (element, i) => {
      
      return(
      <div className='NavElement' key={element.id + i} id = {element.id}>
        {/* use Link because a tag will reload the page each time */}
        <Link to={element.url}>{element.id.toUpperCase()}</Link>
      </div>)
      
      }
      
    )
    }
    </nav>
  )
}

function Header(props){
  return(
    <>
    <Nav links = {navList}/>
    <header className='App-header' id='hdr'>
      <p>Welcome to <a href="/home"><span className='name'>{props.title}</span></a></p>
    </header>
    </>
  )
}


const Footer = () => {
  return(
    <div className='Footer'>
      <p>footer information goes here</p>
    </div>
  )
}
const L1 = ()=>{
  return(
    <>
    <div className='App'>
    <Nav links = {navList}/>
    <Outlet/>
    </div>
    </>
  )
}
const L2 =() =>{
  return(
    <div className="App">
        <Header title="Spore Tea"/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
function App() {
  return (
    
        <Routes>
          <Route path='/' element={<L2/>}>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/' element={<PostBlock posts={notion}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
          <Route path='/home' element={<L1/>}>
              <Route index element={<Home/>}/>
          </Route>
        </Routes>
   
  );
  
}
// module.exports.Nav =Nav;
export default App;
