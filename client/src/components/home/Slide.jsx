import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Countdown from 'react-countdown';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyle = makeStyles({
      component: {
          marginTop: 12,
          background: '#ADD8E6'
      },
      deal: {
          padding: '15px 20px',
          display: 'flex'
      },
      dealtext: {
          fontSize: 18,
          fontWeight: 600,
          lineHeight: '28px',
          marginRight: 8
      },
      timer: {
          display: 'flex',
          alignItems: 'center',
      },
      button: {
          marginLeft: 'auto',
          backgroundColor: '#2874f0',
          fontSize: 10
      },
      image: {
          height: 100
      },
      text: {
          fontSize: 13,
          marginTop: 2
      }
  })

const Slide = ({ timer, title }) => {
    const classes = useStyle();
    
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>;
    } 
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtext}>{title}</Typography>
                {
                    timer &&
                    <>
                      <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                      <Button variant="contained" color="primary" className={classes.button}>View All</Button>
                    </>
                }
            </Box>
            <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            showDots={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                products.map(product => (
                    <Box textAlign="center">
                        <img src = {product.url} className={classes.image} />
                        <Typography className={classes.text} style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{color: 'red'}}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{color: '#212121'}}>{product.tagline}</Typography>
                    </Box>
                ))
            }

             </Carousel>
        </Box>
    )
}

export default Slide;