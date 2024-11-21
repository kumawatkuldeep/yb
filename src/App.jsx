import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Product from './pages/Product';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Healthcare from './pages/Healthcare';
import RealState from './pages/RealState';
import FoodAndBeverage from './pages/FoodAndBeverage';
import Retail from './pages/Retail';
import Manufacturer from './pages/Manufacturer';
import BookDemo from './pages/BookDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nopage" element={<Nopage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/product" element={<Product />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/industry/healthcare" element={<Healthcare />} />
        <Route path="/industry/realstate" element={<RealState />} />
        <Route path="/industry/food-and-beverage" element={<FoodAndBeverage />} />
        <Route path="/industry/ecommerce" element={<Retail />} />
        <Route path="/industry/manufacturer" element={<Manufacturer />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
