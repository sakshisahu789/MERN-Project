import { makeStyles, fade, InputBase } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 7,
        backgroundColor: '#fff' ,
        marginLeft: 20,
        width: '40%',
        display: 'flex',
        color: 'black'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'black'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
      },
}))



const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
             <InputBase
              placeholder="Search for the products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
    )
}

export default SearchBar;