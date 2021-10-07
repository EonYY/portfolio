import { CssBaseline } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ProjectArea from "../components/ProjectArea"
import Header from "/components/Header"
import Contact from "../components/Contact"

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: "url('/Background.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'auto',
  },
}));


export default function Home() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <ProjectArea />

      </div>
    )
  }
