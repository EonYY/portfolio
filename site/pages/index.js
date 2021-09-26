import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles"
import Header from "/components/Header"

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
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>
    )
  }
