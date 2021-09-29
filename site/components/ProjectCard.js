import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles'
import { Collapse, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



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
        color: '#fef',
    },
    projectTools: {
      color: '#fff'
    },
}));

export default function ProjectCard({ project, checked }) {
    const classes = useStyles();

  return (
    <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
      <Card elevation={20} sx={{ 
          maxWidth: 500,
          background: 'rgba(0, 0, 0, 0.6)',
          margin: '50px',
          borderLeft: 2,
          borderRight: 2,
          borderColor: '#ff43a4',
          }}>
        <CardMedia
          component='img'
          height='250'
          image={project.imageURL}
          alt={project.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div' className={classes.cardTitle}>
            {project.title}
          </Typography>


          <Stack direction="row" spacing={3}>
          {project.tools.map((project) => (
          <Chip
            label={project}
            variant='outlined' 
            className={classes.projectTools} 
          />
        ))}
          </Stack>


          <Typography variant='body2' color='text.secondary' className={classes.cardSummary}>
            {project.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' size='medium' startIcon={<LanguageIcon />} className={classes.projectCardButton} href={project.website}>    
              Website
          </Button>
          {project.hasOwnProperty('github') ? <Button variant='outlined' size='medium' startIcon={<GitHubIcon />} className={classes.projectCardButton} href={project.github}>    
              GitHub
          </Button> : []}
        </CardActions>
      </Card>
    </Collapse>
  );
}
