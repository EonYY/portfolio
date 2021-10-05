import { makeStyles } from "@mui/styles"
import ProjectCard from "./ProjectCard"
import projects from "../public/ProjectData";
import useWindowPosition from "../hook/useWindowPosition";
import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  container: {
    textAlign: 'center',
  },
  textThemeColor: {
    color: '#ff43a4',
  },
  scrollDownIcon: {
    fontSize: '3rem',
    color: '#ff43a4',

  },
}));


export default function ProjectArea() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

    return (
      <div className={classes.root}>
        <ProjectCard project={projects[1]} checked={checked} />
        <ProjectCard project={projects[0]} checked={checked} />
      </div>
    )
  }