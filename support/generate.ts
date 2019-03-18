import * as fs from 'fs';
import { rootPath } from 'get-root-path';
import * as path from 'path';

const range = (from: number, toInclusive: number) => {
  const result: number[] = [];
  for (let index = 0; from + index <= toInclusive; index++) {
    result.push(from + index);
  }
  return result;
};

const generateDefinedTypeParameter = (index: number) => (
  `K${index} extends keyof Defined${index < 2 ? '' : index - 1}<T${index < 2 ? '' : range(1, index - 1).map((k) => `, K${k}`).join('')}>`
);

const generateDefinedSignature = (index: number) => (
  `Defined${index < 2 ? '' : index - 1}<T${index < 2 ? '' : range(1, index - 1).map((k) => `, K${k}`).join('')}`
);

function generateCode(maxPropertyCount: number) {
  const lines: string[] = [];

  for (let index = 1; index <= maxPropertyCount; index++) {
    lines.push(`type Defined${index}<T,`);
    for (let k = 1; k <= index; k++) {
      lines.push(`  ${generateDefinedTypeParameter(k)}${k < index ? ',' : ''}`);
    }
    lines.push(`> = Defined<${generateDefinedSignature(index)}>[K${index}]>;`);
    lines.push('');
  }

  lines.push('interface GetPropFunction {');
  lines.push('');

  for (let index = 1; index <= maxPropertyCount; index++) {
    lines.push(`  <`);
    lines.push(`    T,`);
    for (let k = 1; k <= index; k++) {
      lines.push(`    ${generateDefinedTypeParameter(k)}${k < index ? ',' : ''}`);
    }
    lines.push('  >(');
    lines.push('    object: T,');
    lines.push(`    ...keys: [${range(1, index).map((k) => `K${k}`).join(', ')}]`);
    lines.push(`  ): ${generateDefinedSignature(index)}>[K${index}] | undefined;`);
    lines.push('');
  }

  lines.push('}');

  return lines.join('\n');
}

const run = (maxPropertyCount: number) => {
  const template = fs.readFileSync(path.join(rootPath, 'support/template.ts'), { encoding: 'utf8' });

  const code = generateCode(maxPropertyCount);

  const output = template.replace(/\/\/ <generate>\s*.+\s*\/\/ <\/generate>/gim, code);

  const sourcePath = path.join(rootPath, 'src');

  if (!fs.existsSync(sourcePath)) {
    fs.mkdirSync(sourcePath);
  }

  fs.writeFileSync(path.join(sourcePath, 'index.ts'), output, { encoding: 'utf8' });

  // tslint:disable-next-line
  console.log(`Generated function with support for ${maxPropertyCount} nested property names`);
};

run(+process.argv[2]);
