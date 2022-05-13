import { useState } from 'react';
import { Box, Typography, Dialog, DialogContent, makeStyles, Button, TextField } from '@material-ui/core'
import { authenticateSignup } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#008080',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        height: '70vh',
        flex: 1,
        backgroundColor: '#a2d5c6',
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    requestBtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupUserInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const Login = ({ open, setOpen }) => {
    const classes = useStyle();
    console.log(open)

    const [account, setAccount] = useState(initialValue.login);
    const [ signup, setSignup ] = useState(signupUserInitialValues);

    const handleClose = () => {
        setOpen(false);
        setAccount(initialValue.login)
    }

    const toggleAccount = () => {
        setAccount(initialValue.signup)
    }

    const signupUser = async () => {
      let response = await authenticateSignup(signup);
      if(!response) return;
      handleClose();
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                                <TextField name='username' label='Enter Email/Mobile number' />
                                <TextField name='password' label='Enter password' />
                                <Typography className={classes.text}>By continuing, you agree to YourSpace's Terms of Use Privacy Policy</Typography>
                                <Button variant="contained" className={classes.loginbtn}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button varient="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toggleAccount()} className={classes.createText}>New to YourSpace? Create an account</Typography>
                        </Box> :
                        <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone number' />                      
                                <Button varient="contained" onClick={() => signupUser()} className={classes.loginbtn}>Signup</Button>                              
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;