
import { AppBar, Toolbar ,Typography , makeStyles  , Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

//components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles({
    header: {
        background: '#FFAD2F',
        height:80

    },
     logo: {
        width: 150
    },
    component: {
        marginLeft: '2%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subheading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
})

const Header = () => {
    const classes = useStyle();
    const logoURL='/image/logo.png'
    return (
        <AppBar className={classes.header}>
            <Toolbar>
            <Link to='/' className={classes.component}>
                <img src={logoURL} className={classes.logo} /> 
                    <Typography className={classes.subheading}>One step store for all your needs </Typography>
                </Link>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )

};
   

export default Header;