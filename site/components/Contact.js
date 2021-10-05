import { makeStyles } from "@mui/styles"
import { Card, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { FaDiscord } from 'react-icons/fa';




const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactCard: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    width: 500,
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
    }
}));


export default function Contact() {
  const classes = useStyles();


    return (
        <div className={classes.root}>
                <Card className={classes.contactCard} sx={{ 
                    maxWidth: 500,
                    background: 'rgba(0, 0, 0, 0.3)',
                    margin: '50px',
                    borderLeft: 2,
                    borderRight: 2,
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
                            Day by day, I'm improving my skills in this field.<br /><br />
                            Exploring the rich and detailed worlds in cinema and video games and sharing those experiences with friends is one of my favorite hobbies. 
                            Discovering new music that sparks the imagination is amazing. I'm also hoping to learn to skateboard sooner rather than later.<br /><br />
                            <strong>I'm open to job offers!</strong><br /><br />
                            You can reach me on Discord or by Email!<br />
                            <strong><span className={classes.textThemeColor}>Say Hello!</span></strong>
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.contactLinks}>
                        <IconButton>
                            <FaDiscord className={classes.icon} href="#" target="_blank"/>
                        </IconButton>
                        <IconButton>
                            <GitHubIcon className={classes.icon} href="https://github.com/EonYY" target="_blank" />
                        </IconButton>
                        <IconButton>
                            <EmailIcon className={classes.icon} href="#" target="_blank"/>
                        </IconButton>
                    </CardActions>
                    <Typography gutterBottom className={classes.portfolioFooterMessage}>
                            P.S. I built this portfolio site with React and MUI. 
                            You can view the repo on my GitHub. :)
                        </Typography>
                </Card>
        </div>
            )
        }