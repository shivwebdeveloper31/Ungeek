import Search from './Component/Search';
import Blog from './Component/Blog';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header'; 
import Category from './Component/Main/Category';
function App() {
  return (
    <div className="App">
    <Header/>
    <Search/>
    <Blog/>
    <Category/>
    <Footer/>
    </div>
  );
}

export default App;
