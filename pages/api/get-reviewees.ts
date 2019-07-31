import { handleGetReviewees } from '../../server/handlers';

export default async (req, res) => {
  await handleGetReviewees(req, res);
};
