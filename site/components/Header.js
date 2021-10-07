import { IconButton, AppBar, Toolbar, Collapse } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SortIcon from "@mui/icons-material/Sort"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { FaDiscord } from 'react-icons/fa';



const useStyles = makeStyles(() => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        textAlign: 'center',
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
        fontSize: '2rem',
        color: '#fff',
        '&:hover': {
            color: '#ff43a4'
          }
    },
    textThemeColor: {
        color: '#ff43a4',
    },
    headerTitle: {
        color: '#ff43a4',
        textDecorationLine: 'underline',
    },
    welcomeText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '3rem',
    },
    scrollDownIcon: {
        fontSize: '3rem',
        color: '#ff43a4',
    },
  }));
  
  
  export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
        useEffect(() => {
            setChecked(true);
        }, []);
  
      return (
          <div className={classes.root} id="header">
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle} href="https://github.com/EonYY" target='_blank'>
                        Eon<span className={classes.headerTitle}>YY</span>
                    </h1>
                    <IconButton href="https://discordapp.com/users/809948633046581290" target="_blank">
                        <FaDiscord className={classes.icon} />
                    </IconButton>
                    <IconButton href="https://github.com/EonYY" target="_blank">
                        <GitHubIcon className={classes.icon} />
                    </IconButton>
                    <IconButton href="mailto:eonblues@outlook.com" target="_blank">
                        <EmailIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Collapse
                in={checked}
                { ... (checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.welcomeText}>Hey there!
                    <br />I'm <span className={classes.textThemeColor}>Eon.</span>
                    </h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.scrollDownIcon} />
                    </IconButton>
                </div>
            </Collapse>
            </div>
      )
    }