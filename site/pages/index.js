import { makeStyles } from "@mui/styles"



const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${'/assets/Background.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));


export default function Home() {
  const classes = useStyles();

    return (
      <div className={classes.root}></div>
    )
  }
