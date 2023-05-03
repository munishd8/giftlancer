import logo from './logo.svg';
import './App.css';
import ProductPage from './components/pages/product/product';
import FooterMain from './components/common/footer/footer';
import MainHeader from './components/common/header/header';

function App() {
  return (
    <>  
      <MainHeader/>
        <ProductPage/>
      <FooterMain/>
    </>
  );
}

export default App;
