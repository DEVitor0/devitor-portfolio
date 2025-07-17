import { Content } from '../../../utils/content';

export const SearchFilter = (category) =>
  Content.filter((item) => item.category === category);
