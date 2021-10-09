import ProjectCard from "./ProjectCard"
import projects from "../public/ProjectData";
import useWindowPosition from "../hook/useWindowPosition";
import { makeStyles } from "@mui/styles";
import { createBreakpoints } from "@mui/system";
import { Typography } from "@mui/material";


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
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  container: {
    textAlign: 'center',
  },
  textThemeColor: {
    color: '#ff43a4',
  },
  projectSectionHeader: {
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'column',
  },
}));


export default function ProjectArea() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

    return (
      <div container direction='flow' className={classes.root}>
            <Typography variant='h3' className={classes.projectSectionHeader} checked={checked}>
              Some of <br />my <span className={classes.textThemeColor}>Projects.</span>
            </Typography>
            <ProjectCard project={projects[1]} checked={checked} />
            <ProjectCard project={projects[0]} checked={checked} />
      </div>
    )
  }