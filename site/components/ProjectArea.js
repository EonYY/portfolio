import { makeStyles } from "@mui/styles"
import ProjectCard from "./ProjectCard"
import projects from "../public/ProjectData";

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


export default function ProjectArea() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
          <ProjectCard project={projects[1]}/>
          <ProjectCard project={projects[0]}/>
      </div>
    )
  }