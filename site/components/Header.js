import { IconButton, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SortIcon from "@mui/icons-material/Sort"

const useStyles = makeStyles(() => ({
    appBar: {
        background: 'none',
    },
    appBarTitle: {
        flexGrow: '1',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    textThemeColor: {
        color: '#ff409f',
    }
  }));
  
  
  export default function Header() {
    const classes = useStyles();
  
      return (
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}>My<span className={classes.textThemeColor}>Skills.</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
      )
    }