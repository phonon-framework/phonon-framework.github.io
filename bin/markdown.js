const fs = require('fs');
const path = require('path');

// config
const markdownDir = 'markdown';
const source = './utils/markdown.js';
const tree = [];

function read(dir, dirOnly = true, filesOnly = false) {
  return fs.readdirSync(dir)
    .filter((f) => {
      if (dirOnly) {
        return fs.statSync(`${path.join(dir, f)}`).isDirectory();
      } else if (filesOnly) {
        return fs.statSync(`${path.join(dir, f)}`).isFile();
      }

      return true;
    });
}

function cleanImportName(name) {
  return name
    .replace(/[\.\-]/g, '');
}

function getResourcePath(resource = {}, delimiter = '', clean = false) {
  const version = clean ? cleanImportName(resource.version) : resource.version;
  const section = clean ? cleanImportName(resource.section) : resource.section;
  const file = clean ? cleanImportName(resource.file) : resource.file;

  return `${version}${delimiter}${section}${delimiter}${file.replace(/\.md/, '')}`;
}

const mainPath = `./${markdownDir}`;

read(mainPath, true)
  .forEach((version) => {
    read(`${path.join(mainPath, version)}`, true).forEach((section) => {
      read(`${path.join(mainPath, version, section)}`, false, true).forEach((file) => {
        tree.push({
          version,
          section,
          file,
        })
      });
    });
  });

const imports = tree.reduce((acc, resource) => {
  const name = getResourcePath(resource, '', true);
  const realPath = getResourcePath(resource, '/');
  return acc + `import ${name} from '@/${markdownDir}/${realPath}.md';\n`;
}, '');

const exported = tree.reduce((acc, resource, i) => {
  const name = getResourcePath(resource, '/');
  const importName = getResourcePath(resource, '', true);

  if (i === 0) {
    acc = 'export default {\n';
  }

  acc += `  '${name}': ${importName},\n`;

  if (i === tree.length - 1) {
    acc += '};';
  }

  return acc;
}, '');

fs.writeFileSync(source, `${imports}\n\n${exported}`);
