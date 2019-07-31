import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const router = useRouter();
  const classes = useStyles({});
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const loginName = localStorage['name'];
    if (loginName) {
      setName(loginName);
    }
  }, []);

  const loginButton = (
    <Link href="/login">
      <Button color="inherit">login</Button>
    </Link>
  );

  const logout = () => {
    localStorage['name'] = '';
    router.push('/login');
  }

  const logoutButton = (
    <Button color="inherit" onClick={logout}>logout</Button>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
          </Link>
          
          <Link href="/admin">
            <Button color="inherit">admin</Button>
          </Link>
          {name ? (
            <Link href="/review">
              <Button color="inherit">review</Button>
            </Link>
          ) : <div/>}
          
          <Typography variant="h6" className={classes.title}>
          </Typography>
          {/* <Link href="/login">
            <Button color="inherit">login</Button>
          </Link> */}
          {name ? logoutButton : loginButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}
