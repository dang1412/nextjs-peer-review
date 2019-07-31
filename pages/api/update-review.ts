import { handleUpdateReview } from '../../server/handlers';

export default async (req, res) => {
  await handleUpdateReview(req, res);
};
