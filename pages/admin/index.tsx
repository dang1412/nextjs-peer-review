import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { getUsers } from '../../fetch';
import { IUser } from '../../types/user.type';
import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <Layout>
      <Table data={users}/>

      <Link href="admin/add">
        <IconButton color="primary" aria-label="add to shopping cart">
          <Add />
        </IconButton>
      </Link>
    </Layout>
  )
}
