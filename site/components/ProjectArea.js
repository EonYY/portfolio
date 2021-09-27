import { makeStyles } from "@mui/styles"
import ProjectCard from "./ProjectCard"
import projects from "../public/ProjectData";
import useWindowPosition from "../hook/useWindowPosition";

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
  const checked = useWindowPosition('header');

    return (
      <div className={classes.root}>
          <ProjectCard project={projects[1]} checked={checked} />
          <ProjectCard project={projects[0]} checked={checked} />
      </div>
    )
  }