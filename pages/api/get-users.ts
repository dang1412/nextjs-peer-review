import { handleGetUsers } from '../../server/handlers';

export default async (req, res) => {
  await handleGetUsers(req, res);
};
