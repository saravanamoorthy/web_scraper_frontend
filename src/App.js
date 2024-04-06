import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/Products/ProductList';
import SearchProduct from './components/Products/SearchProduct';
import NewProduct from './components/Products/NewProduct';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Web Scraper
              </Typography>
              <Button color="inherit" component={Link} to="/">Products</Button>
              <Button color="inherit" component={Link} to="/products/new">Add Product</Button>
              <Button color="inherit" component={Link} to="/search">Search Products</Button>
            </Toolbar>
          </AppBar>

          <Routes>
           <Route path="/" element={<ProductList />
           <Route path="/search" element={<SearchProduct />} />
           <Route path="/products/new" element={<NewProduct />} />
         </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
