import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'
import { Collapse } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { createBreakpoints } from "@mui/system";


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
    cardTitle: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
    },
    cardSummary: {
        color: '#fff',
        fontFamily: 'Nunito',
    },
    projectCardButton: {
        fontWeight: '600',
        backgroundColor: '#ff43a4',
        "&:hover,&:focus": {
          backgroundColor: "#ff8ec8"
        },
    },
    projectTools: {
      color: '#fff',
      fontWeight: '600'
    },
}));

export default function ProjectCard({ project, checked }) {
    const classes = useStyles();

  return (
    <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
      <Card elevation={20} sx={{ 
          maxWidth: 500,
          background: 'rgba(0, 0, 0, 0.7)',
          margin: '50px',
          borderLeft: 2,
          borderRight: 2,
          borderColor: '#ff43a4',
          [breakpoints.down('md')]: {
            border: '(0px, 2px, 0px, 2px)',
            borderColor: '#ff43a4',
            marginLeft: '0px',
            marginRight: '0px',
          }
          }}>
        <CardMedia
          component='img'

          image={project.imageURL}
          alt={project.imageAlt}
          title={project.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div' className={classes.cardTitle}>
            {project.title}
          </Typography>

          <Stack direction="row" spacing={1}>
            {project.tools.map((project, index) => (
                <Chip key={index} sx={{
                  borderColor: 'rgba(25, 118, 210, 0.5)',
                  borderWidth: 2,
                  marginBottom: 1,
                }}
                  label={project}
                  variant='outlined'
                  className={classes.projectTools} />))}
          </Stack>

          <Typography variant='body2' color='text.secondary' className={classes.cardSummary}>
            {project.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='filled' size='large' startIcon={<LanguageIcon />} className={classes.projectCardButton} href={project.website} target="_blank">    
              Website
          </Button>
          {project.hasOwnProperty('github') ? <Button variant='filled' size='large' startIcon={<GitHubIcon />} className={classes.projectCardButton} href={project.github} target="_blank">    
              GitHub
          </Button> : []}
        </CardActions>
      </Card>
    </Collapse>
  );
}
