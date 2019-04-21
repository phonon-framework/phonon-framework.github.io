import markdown from './markdown';

export function loadMarkdown(version, section, file) {
  return markdown[`${version}/${section}/${file}`];
}
