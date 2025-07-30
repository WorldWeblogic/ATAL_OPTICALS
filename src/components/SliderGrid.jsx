
import { Box, Grid, Typography, Button } from '@mui/material';
import Slider from "react-slick";
import img1 from '../assets/category/woman.jpg'
import img2 from '../assets/frame/menframe.jpg';
import Divider from '@mui/material/Divider';
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        right: '112px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        background: '#00000070',
        borderRadius: '50%',
        padding: '8px',
      }}
    >
      &#8250;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        background: '#00000070',
        borderRadius: '50%',
        padding: '8px',
      }}
    >
      &#8249;
    </div>
  );
};
const SliderGrid = () => {
    
    const settings = {
    arrows: false,           // Enable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>   
    <Box sx={{ marginTop: '50px' }}>
      <Grid container spacing={2}>
      
        <Grid size={{ xs: 6, md: 4 }} sx={{padding: '20px', marginTop: '50px'}}>
        <Box><Typography variant='h2' sx={{fontSize:'50px',marginleft:'50px', fontWeight:'600'}}>Styles For Everyone</Typography>
         <Divider sx={{background:'red',width: '50%',  marginLeft:'70px', height: 2, marginBottom:'20px', marginTop:'20px'}} />
          <Button
            variant="text"
            sx={{
           
              marginLeft:5,
              color: 'red',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: 30,
              mb: 1
            }}
            endIcon={<span style={{ fontSize: 18 }}>›</span>}
          >
            Woman's Style Guide
          </Button>
          <br />
          <Button
            variant="text"
            sx={{
                 marginLeft:5,
              color: 'red',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: 30
            }}
            endIcon={<span style={{ fontSize: 18 }}>›</span>}
          >
            Men's Style Guide
          </Button>
        </Box>
         
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
        
    <Slider {...settings}>
      <Box>
      <img src={img1} style={{ width: '90%',   objectFit: 'cover', height: '500px', position:'center', }} />
      </Box>
             <Box>
             <img src={img2} style={{ width: '90%',   objectFit: 'cover', height: '500px', }} />
             </Box>
    
      </Slider>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default SliderGrid