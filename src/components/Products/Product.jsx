import React from 'react';
import { Card, CardMedia, CardActions, CardContent, Typography, Button, Grid } from '@material-ui/core';

const Product = ({ title, price, description, category }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {category['name']}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            {description}
          </Typography>*/}
        </CardContent>
        <CardActions>
          <Button size="small">Price: ${price}</Button>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
