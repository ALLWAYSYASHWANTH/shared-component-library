// scripts/versionBump.ts
import * as fs from 'fs';
import * as path from 'path';

interface PackageJson {
  version: string;
  [key: string]: any;
}

const packageJsonPath = path.join(__dirname, '../package.json');

// Function to read and parse package.json
const readPackageJson = (): PackageJson => {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  return JSON.parse(packageJsonContent) as PackageJson;
};

// Function to write the updated version back to package.json
const writePackageJson = (packageObj: PackageJson) => {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageObj, null, 2), 'utf8');
};

// Function to bump the version
const bumpVersion = (type: 'patch' | 'minor' | 'major' = 'patch') => {
  const packageObj = readPackageJson();
  const versionArray = packageObj.version.split('.').map((x) => parseInt(x, 10));

  let [major, minor, patch] = versionArray;

  switch (type) {
    case 'major':
      major += 1;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor += 1;
      patch = 0;
      break;
    case 'patch':
      patch += 1;
      break;
  }

  const newVersion = `${major}.${minor}.${patch}`;
  packageObj.version = newVersion;

  writePackageJson(packageObj);
  console.log(`Version bumped to ${newVersion}`);
};

// Default bump type is 'patch', but you can pass 'major' or 'minor' via environment variables
const bumpType = (process.env.VERSION_TYPE as 'patch' | 'minor' | 'major') || 'patch';
bumpVersion(bumpType);
