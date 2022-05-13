
import { Box, makeStyles } from '@material-ui/core';

//component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import MidSection from './MidSection';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightwrapper: {
        background: '#FFFFFF',
        padding: 2,
        margin: '10px 0 0 8px'
    }
})


const Home = () => {
    const classes = useStyle();
    const adURL = 'https://i.pinimg.com/736x/b0/8d/06/b08d062660c2b4990faa46ed2dca320c.jpg';
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display: 'flex'}}>
                    <Box style={{width: '87%'}}>
                        <Slide 
                            timer={true}
                            title="Today's Top Deals"
                        />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{width: 150}} />
                    </Box>
                </Box>
                <MidSection />
                <Slide 
                     timer={false} 
                     title="Discounts"
                />
                <Slide 
                    timer={false}
                    title="Suggestions for you"
                 />
            </Box>
        </div>
    )
}

export default Home;