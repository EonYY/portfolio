import { makeStyles } from "@mui/styles"
import ProjectCard from "./ProjectCard"
import projects from "../public/ProjectData";
import useWindowPosition from "../hook/useWindowPosition";
import { Collapse } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: -50,
},
}));


export default function ProjectArea() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

    return (
      <>
      <div className={classes.root}>
        <ProjectCard project={projects[1]} checked={checked} />
        <ProjectCard project={projects[0]} checked={checked} />
      </div>
      <div className={classes.container}>
        <IconButton>
            <KeyboardArrowDownIcon className={classes.scrollDownIcon} />
        </IconButton>
      </div>
      </>
    )
  }