import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles"



const useStyles = makeStyles(() => ({}));


export default function Home() {
  const classes = useStyles();

    return (
      <div>
        <AppBar>
            <h1>Header</h1>
        </AppBar>
      </div>
    )
  }