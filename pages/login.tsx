import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

import Layout from '../components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState<string>('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const login = () => {
    if (!name) return;

    localStorage['name'] = name;
    router.push('/review');
  }

  return (
    <Layout>
      <FormGroup>
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
          onChange={handleChangeName}
        />
      </FormGroup>

      <Button variant="contained" color="primary" onClick={login}>
        Sign In
      </Button>
    </Layout>
  )
}
