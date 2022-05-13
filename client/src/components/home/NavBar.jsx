
import{ navData } from '../../constants/data';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        display:'flex',
        margin:'85px 170px 0 160px',
        },
    container: {
        textAlign: 'center',
        padding: '12px 18px',
        justifyContent: 'spcae-between'
    },
    image: {
        width: 200
    },
    text: {
        fontsize: 25,
        fontweight: 600
    }
})

const NavBar = () => {
        const classes = useStyle();
        return (
            <Box className={classes.component}>
                {
                    navData.map(data => (
                       <Box className={classes.container}>
                           <img src = {data.url} className={classes.width} />
                           <Typography>{data.text}</Typography>
                       </Box>
                    ))
                }
            </Box>
    )
}
 
    


export default NavBar;