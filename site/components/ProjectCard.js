import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"




const useStyles = makeStyles(() => ({
    cardTitle: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
    }
}));

export default function ProjectCard() {
    const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component='img'
        height='300'
        image={"/assets/oyuura-screenshot-small.jpg"}
        alt='oyuura screenshot'
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" className={classes.cardTitle}>
          OYUURA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The official homepage for my digital agency.
        </Typography>
      </CardContent>
    </Card>
  );
}