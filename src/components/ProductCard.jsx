import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
 // const priceInRupees = (product.price * 82).toFixed(0);

  //const formattedPrice = new Intl.NumberFormat().format(priceInRupees);

  return (
    <Card sx={{ 
      maxWidth: 345, 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      boxShadow: 3,
      borderRadius: 2
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2
        }}
      />
      <CardContent sx={{ flexGrow: 1, paddingBottom: '16px' }}>
        <Typography variant="h6" component="div" color="primary" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
          Category: {product.category}
        </Typography>
        <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold' }}>
          ₹{formattedPrice} 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
