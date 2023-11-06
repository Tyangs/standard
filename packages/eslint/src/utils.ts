import { readFileSync } from 'fs';
import path from 'path';

export const isDepExist = (name: string) => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  try {
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    const { dependencies = {}, devDependencies = {} } = JSON.parse(packageJsonContent);
    const allDependencies = { ...dependencies, ...devDependencies };

    return Object.keys(allDependencies).includes(name);
  } catch (error) {
    return false;
  }
};

export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (key.startsWith(from)) return [to + key.slice(from.length), value];
      return [key, value];
    }),
  );
}
