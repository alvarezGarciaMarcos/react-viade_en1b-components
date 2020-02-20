"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_workspace_1 = require("./create-workspace");
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var rimraf_1 = __importDefault(require("rimraf"));
function getDefaultComponent() {
    return {
        'src/comp.tsx': "\n    import React from 'react'\n    export className HelloWorld {\n        render() {\n            return <div>Hello-World</div>\n        }\n    }",
        'src/test.css': '',
        'src/types.d.ts': '',
        'src/try.svg': ''
    };
}
exports.getDefaultComponent = getDefaultComponent;
function getBitAddCommand(files, compId) {
    var bitAddCommand = 'bit add';
    var testsFiles = '';
    files.forEach(function (filePath) {
        if (filePath.includes('.spec.')) {
            testsFiles += filePath + ",";
        }
        else {
            bitAddCommand += " " + filePath;
        }
    });
    testsFiles = testsFiles.substring(0, testsFiles.length - 1);
    bitAddCommand += " --main " + files[0] + " --id " + compId + " --tests \"" + testsFiles + "\"";
    return bitAddCommand;
}
exports.getBitAddCommand = getBitAddCommand;
function buildComponentInWorkspace(helper, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var results, component, files, compId, _a, output, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    results = { directory: '', files: [], showComponent: {} };
                    component = (opts && opts.component) || getDefaultComponent();
                    files = Object.keys(component);
                    compId = getFileName(files[0]);
                    compId = compId.substring(0, compId.indexOf('.'));
                    _a = results;
                    return [4, create_workspace_1.createWorkspace(component, {
                            env: (opts && opts.compilerPath) || 'dist/src/index.js',
                            envTester: (opts && opts.envTester) || '',
                            name: 'typescript',
                            packageJSON: {
                                dependencies: {
                                    '@types/react': '^16.9.11',
                                    react: '^16.11.0'
                                }
                            }
                        })];
                case 1:
                    _a.directory = _c.sent();
                    helper.scopeHelper.initWorkspace(results.directory);
                    helper.command.runCmd(getBitAddCommand(files, compId), results.directory);
                    output = '';
                    if (!(!opts || opts.disableBuildStep !== true)) return [3, 3];
                    output = helper.env.command.runCmd(getCommandString(compId, opts), results.directory);
                    _b = results;
                    return [4, fs_extra_1.default.readdir(path_1.default.join(results.directory, '/dist'))];
                case 2:
                    _b.files = _c.sent();
                    _c.label = 3;
                case 3:
                    if (opts && opts.shouldPrintOutput) {
                        console.log('------------output------------');
                        console.log(output);
                        console.log('------------output------------');
                    }
                    results.showComponent = JSON.parse(helper.command.runCmd("bit show " + compId + " --json", results.directory));
                    return [2, results];
            }
        });
    });
}
exports.buildComponentInWorkspace = buildComponentInWorkspace;
function getFileName(path) {
    return path.replace(/^.*[\\\/]/, '');
}
exports.getFileName = getFileName;
function getCommandString(compId, opts) {
    return opts && opts.shouldDebugEnvironment
        ? "node --inspect-brk $(which bit) build " + compId
        : "bit build " + compId;
}
function removeWorkspace(directory) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) { return rimraf_1.default(directory, {}, function (error) { return (error ? reject() : resolve()); }); })];
        });
    });
}
exports.removeWorkspace = removeWorkspace;
