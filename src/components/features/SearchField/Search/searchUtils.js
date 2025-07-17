import { KeywordsMap } from '../../../../data/keywordsMap';

export function findRelatedName(term) {
  const lowerTerm = term.toLowerCase();

  for (const [originalName, keywords] of Object.entries(KeywordsMap)) {
    for (const keyword of keywords) {
      if (lowerTerm.includes(keyword.toLowerCase())) {
        return originalName;
      }
    }
  }
  return null;
}
