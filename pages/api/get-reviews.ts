import { handleGetReviews } from '../../server/handlers';

export default async (req, res) => {
  await handleGetReviews(req, res);
};
