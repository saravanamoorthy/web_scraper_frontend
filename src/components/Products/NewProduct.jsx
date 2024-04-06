import { React, useState } from 'react';
import { Button, TextField, Alert, CheckIcon } from '@material-ui/core';
import axios from 'axios';

const NewProduct = () => {

  const [url, setUrl] = useState('');
  const [notice, setNotice] = useState('');
  const createProduct = () => {
    axios.post('http://localhost:3000/api/v1/scraping', {
      url: url
    }).then((res) => {
      setNotice(res['data']['message']);
    });
  }

  return (
    <div>
      <h1>New Product</h1>
      { notice != '' && <span>{notice} <a href='/'>Back to products</a></span> }
      <br/><br/>
      <TextField id="outlined-basic" label="URL" variant="outlined" onChange={(e) => {
          setUrl(e.target.value);
        }} 
      />
      <br/><br/>
      <Button size="small" variant="contained" onClick={createProduct} disable={url == ''}>Submit</Button>
    </div>
  );
};

export default NewProduct;
