import { IconButton, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SortIcon from "@mui/icons-material/Sort"

const useStyles = makeStyles(() => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
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
        color: '#ff43a4',
    },
    welcomeText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '3rem',
    }
  }));
  
  
  export default function Header() {
    const classes = useStyles();
  
      return (
          <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        Eon<span className={classes.textThemeColor}>YY</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
                <div>
                    <h1 className={classes.welcomeText}>
                    Hey there!
                    <br />I'm <span className={classes.textThemeColor}>Eon.</span>
                    </h1>
                </div>
            </div>
      )
    }