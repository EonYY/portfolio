import { makeStyles } from "@mui/styles"
import { Card, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { FaDiscord } from 'react-icons/fa';
import { createBreakpoints } from "@mui/system";
import { Grid } from "@mui/material";

const breakpoints = createBreakpoints({ 
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  })

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoints.down('md')]: {
        flexDirection: 'column',
      }
  },
  contactCard: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',

  },
  icon: {
    fontSize: '2rem',
    color: '#fff',
    '&:hover': {
        color: '#ff43a4'
   }},
   contactLinks: {
       justifyContent: 'center'
   },
   contactTitle: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#fff',
    },
    contactPosition: {
        fontFamily: 'Nunito',
        fontSize: '1.3rem',
    },
    textThemeColor: {
        color: '#ff43a4',
    },
    contactSummary: {
        color: '#fff',
        fontFamily: 'Nunito',
    },
    portfolioFooterMessage: {
        fontFamily: 'Nunito',
        fontSize: '0.65rem',
        color: '#ff43a4',
        fontWeight: 'bold',
    },
    projectSectionHeader: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        textAlign: 'center',
      },
}));


export default function Contact() {
  const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography variant='h3' className={classes.projectSectionHeader}>
              Contact <span className={classes.textThemeColor}>Me.</span>
            </Typography>
            
            <Card className={classes.contactCard} sx={{ 
                maxWidth: 500,
                background: 'rgba(0, 0, 0, 0.3)',
                margin: '20px',
                border: 2,
                borderColor: '#ff43a4',
                }}>

                <Typography paddingTop={3} variant='h4' component='div' className={classes.contactTitle}>
                    EON <span className={classes.textThemeColor}>YYYYYYYY</span>
                </Typography>
                <Typography variant='h5' component='div' className={classes.contactPosition}>
                    Full Stack Web Developer
                </Typography>


                <CardContent>
                    <Typography variant='body2' color='text.secondary' className={classes.contactSummary}>
                        <strong>Hey there!</strong><br /><br />
                        Day by day, I&#39;m improving my skills in this field.<br /><br />
                        Exploring the rich and detailed worlds in cinema and video games and sharing those experiences with friends is one of my favorite hobbies. 
                        <br /><br />
                        <strong>I&#39;m open to job offers!</strong><br /><br />
                        You can reach me on Discord or by Email!<br />
                        <strong><span className={classes.textThemeColor}>Say Hello!</span></strong>
                    </Typography>
                </CardContent>

                <CardActions className={classes.contactLinks}>
                    <Grid container direction='column'>
                        
                        <Grid item={12}>
                            <IconButton href="https://discordapp.com/users/809948633046581290" target="_blank">
                                <FaDiscord className={classes.icon} />
                            </IconButton>
                            <IconButton href="https://github.com/EonYY" target="_blank">
                                <GitHubIcon className={classes.icon} />
                            </IconButton>
                            <IconButton href="mailto:eonblues@outlook.com" target="_blank">
                                <EmailIcon className={classes.icon} />
                            </IconButton>
                        </Grid>

                        <Grid item={12}>
                        <Typography gutterBottom className={classes.portfolioFooterMessage}>
                            P.S. I built this portfolio site with React and MUI. 
                            You can view the repo on my GitHub. :)
                        </Typography>
                        </Grid>

                    </Grid>
                </CardActions>
            </Card>
        </div>
            )
        }