import { NOT_FOUND } from '../data/constants_url';

export const getIdFromHref = href => {
  const regex = /\/(\d+)$/;
  const match = href.match(regex);
  return match ? match[1] : NOT_FOUND;
};
