import { handleGetUserById } from '../../server/handlers';

export default async (req, res) => {
  await handleGetUserById(req, res);
};
