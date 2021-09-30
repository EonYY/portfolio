import { makeStyles } from "@mui/styles"
import { Card, CardHeader, CardContent, CardActions, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactCard: {

  }
}));


export default function Contact() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
          <Card className={classes.contactCard}>
            <CardHeader
                title='contact'
            >
            </CardHeader>
            <CardActions>
                <IconButton>
                    <EmailIcon className={classes.icon} href="#"/>
                </IconButton>
                <IconButton>
                    <GitHubIcon className={classes.icon} href="https://github.com/EonYY"/>
                </IconButton>
            </CardActions>
          </Card>
      </div>
    )
  }