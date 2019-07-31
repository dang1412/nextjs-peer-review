import { handleAddUser } from '../../server/handlers';

export default async (req, res) => {
  await handleAddUser(req, res);
};
