import { makeStyles } from "@mui/styles"
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
}));


export default function Projects() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
          <ProjectCard />
      </div>
    )
  }