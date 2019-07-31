import { handleUpdateReviewers } from '../../server/handlers';

export default async (req, res) => {
  await handleUpdateReviewers(req, res);
};
