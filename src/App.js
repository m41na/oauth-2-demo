import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PracticalDime
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  main: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function App({ loginForm, handleLoginChange, handleSignIn}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LockOpenIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            OAuth 2 Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.buttons}>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                  Link
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <SignIn form={loginForm} handleLoginChange={handleLoginChange} handleSignIn={handleSignIn} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <SignUp />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Oauth 2 demo</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
