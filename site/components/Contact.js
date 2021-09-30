import { makeStyles } from "@mui/styles"
import { Card } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


export default function Contact() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
          <Card>

          </Card>
      </div>
    )
  }