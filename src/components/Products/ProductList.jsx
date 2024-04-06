import React, { useState, useEffect} from 'react';
import Product from './Product';
import axios from "axios";
import { Grid, Container } from '@material-ui/core';
const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/products", {"Content-Type": "application/json"})
      .then((res) => {
        console.log(res['data']['products']);
        setProducts(res['data']['products']);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <br/>
      <Container maxWidth="md">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          { products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
