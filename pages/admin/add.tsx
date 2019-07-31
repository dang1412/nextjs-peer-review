import React from 'react';
import Button from '@material-ui/core/Button';

import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import { IUser } from '../../types/user.type';
import UserForm from '../../components/UserForm';
import { createUser } from '../../fetch';

const AddEmployee = () => {
  const router = useRouter();
  let user = null;

  const handleUserChanged = (state: IUser) => user = state;

  const submit = async () => {
    console.log('Submit user', user);
    const id = await createUser(user);
    console.log('Got data', id);

    router.push('/admin');
  }

  const back = () => router.push('/admin');

  return (
    <Layout>
      <UserForm stateChanged={handleUserChanged} />

      <Button variant="contained" style={{marginRight: 10}} onClick={back}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={submit}>
        Submit
      </Button>
    </Layout>
  )
}

export default AddEmployee;
