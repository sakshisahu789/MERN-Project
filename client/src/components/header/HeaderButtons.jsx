import { useState } from 'react';
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

//component
import LoginDialog from '../login/Login';

const useStyle = makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#2874f0',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px'

    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }
})

const HeaderButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);

    const openLoginDialog = () => {
        setOpen(true);
      
    }
    return (
        <Box className={classes.wrapper}>
        <Link to={{}}><Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button></Link>
        <Link><Typography style={{marginTop: 5}}>Menu</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={3} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} />
        </Box>

    )
}

export default HeaderButtons;