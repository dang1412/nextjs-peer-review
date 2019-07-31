import React from 'react';
import Button from '@material-ui/core/Button';

import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import UserForm from '../../components/UserForm';
import { IUser } from '../../types/user.type';

const EditEmployee = () => {
  const router = useRouter();
  let user = null;

  const handleUserChanged = (state: IUser) => user = state;

  const submit = async () => {
    console.log('Update user', user);
  }

  const back = () => router.push('/admin');

  return (
    <Layout>
      <UserForm stateChanged={handleUserChanged} userId={router.query.userId} />

      <Button variant="contained" style={{ marginRight: 10 }} onClick={back}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={submit}>
        Update
      </Button>
    </Layout>
  )
}

export default EditEmployee;
