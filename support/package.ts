import * as fs from 'fs';
import { rootPath } from 'get-root-path';
import * as path from 'path';

const filesToCopy = ['package.json', 'README.md', 'LICENSE'];

filesToCopy.forEach((fileName) => {
  fs.copyFileSync(
    path.join(rootPath, fileName),
    path.join(rootPath, 'dist', fileName)
  );
});

const packageObject = JSON.parse(fs.readFileSync('dist/package.json', 'utf8'));

delete packageObject.private;
delete packageObject.scripts;
delete packageObject.devDependencies;
delete packageObject.husky;

fs.writeFileSync(
  path.join(rootPath, 'dist/package.json'),
  JSON.stringify(packageObject, null, '  '),
  'utf8'
);
