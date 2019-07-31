import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { IUser, UserRole } from '../types/user.type';
import { getUser } from '../fetch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: 200,
    },
    check: {
      width: 200,
      marginTop: 15
    }
  }),
);

const UserForm = props => {
  const classes = useStyles({});

  const [state, setState] = useState<IUser>({
    name: '',
    isAdmin: false,
    role: UserRole.Frontend,
    des: ''
  });

  // request for user info if userId is provided
  useEffect(() => {
    if (props.userId) {
      getUser(props.userId).then(handleStateChange);
    }
  }, [props.userId]);

  // update state and emit output
  const handleStateChange = (newState: IUser) => {
    setState(newState);
    if (typeof props.stateChanged === 'function') {
      props.stateChanged(newState);
    }
  }

  const handleChange = (key: keyof IUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleStateChange({ ...state, [key]: event.target.value });
  };

  const handleChangeIsAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleStateChange({ ...state, isAdmin: event.target.checked });
  };

  return (
    <div>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.formControl}
        value={state.name}
        onChange={handleChange('name')}
        margin="normal"
      />

      <FormGroup className={classes.formControl}>
        <FormControl>
          <InputLabel htmlFor="role-simple">Role</InputLabel>
          <Select
            value={state.role}
            onChange={handleChange('role')}
            inputProps={{
              name: 'role',
              id: 'role-simple',
            }}
          >
            <MenuItem value={UserRole.Android}>Android</MenuItem>
            <MenuItem value={UserRole.Backend}>Backend</MenuItem>
            <MenuItem value={UserRole.Frontend}>Frontend</MenuItem>
            <MenuItem value={UserRole.IOS}>IOS</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

      <FormGroup className={classes.check}>
        <FormControlLabel
          control={
            <Checkbox checked={state.isAdmin} onChange={handleChangeIsAdmin} value="isAdmin" />
          }
          label="IsAdmin"
        />
      </FormGroup>
    </div>
  )
}

export default UserForm;
