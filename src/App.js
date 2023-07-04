import './App.css';
import ClothSizes from './Components/Cloths/ClothSizes';
import ProductList from './Components/products/ProductList';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <ClothSizes/>
     <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
