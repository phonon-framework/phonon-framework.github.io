import markdown from './markdown';

function loadMarkdown(version, section, file) {
  return markdown[`${version}/${section}/${file}`];
}

export default loadMarkdown;
