"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/versionBump.ts
var fs = require("fs");
var path = require("path");
var packageJsonPath = path.join(__dirname, '../package.json');
// Function to read and parse package.json
var readPackageJson = function () {
    var packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    return JSON.parse(packageJsonContent);
};
// Function to write the updated version back to package.json
var writePackageJson = function (packageObj) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageObj, null, 2), 'utf8');
};
// Function to bump the version
var bumpVersion = function (type) {
    if (type === void 0) { type = 'patch'; }
    var packageObj = readPackageJson();
    var versionArray = packageObj.version.split('.').map(function (x) { return parseInt(x, 10); });
    var major = versionArray[0], minor = versionArray[1], patch = versionArray[2];
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
    var newVersion = "".concat(major, ".").concat(minor, ".").concat(patch);
    packageObj.version = newVersion;
    writePackageJson(packageObj);
    console.log("Version bumped to ".concat(newVersion));
};
// Default bump type is 'patch', but you can pass 'major' or 'minor' via environment variables
var bumpType = process.env.VERSION_TYPE || 'patch';
bumpVersion(bumpType);
