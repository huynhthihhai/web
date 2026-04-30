
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Support from './Pages/Support';
import CustomerCare from './Pages/CustomerCare';
import LoginSignup from './Pages/LoginSignup';
import Setting from './Pages/Setting';
import Footer from './Components/Footer/Footer';

function App() {
  return (


    <BrowserRouter>
      <div className="background">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trang-chu' element={<Home />} />
          <Route path='/gioi-thieu' element={<About />} />
          <Route path='/ho-tro' element={<Support />} />
          <Route path='/cham-soc-khach-hang' element={<CustomerCare />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cai-dat' element={<Setting />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
