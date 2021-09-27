import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"
import { Collapse } from '@mui/material';



const useStyles = makeStyles(() => ({
    cardTitle: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
    },
    cardSummary: {
        color: '#fff',
        fontFamily: 'Nunito',
    }
}));

export default function ProjectCard({ project, checked }) {
    const classes = useStyles();

  return (
    <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
      <Card sx={{ 
          maxWidth: 500,
          background: 'rgba(0, 0, 0, 0.6)',
          margin: '50px',
          }}>
        <CardMedia
          component='img'
          height='250'
          image={project.imageURL}
          alt={project.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" className={classes.cardTitle}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.cardSummary}>
            {project.summary}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}