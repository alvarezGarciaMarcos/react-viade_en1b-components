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
var fs_1 = require("fs");
var mkdirp_1 = __importDefault(require("mkdirp"));
var path_1 = __importDefault(require("path"));
var get_capsule_name_1 = require("./get-capsule-name");
function createWorkspace(content, options) {
    return __awaiter(this, void 0, void 0, function () {
        var targetDir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    targetDir = get_capsule_name_1.getCapsuleName('space');
                    enrichContentWithDefaults(content, options);
                    return [4, createFS(targetDir, content)];
                case 1:
                    _a.sent();
                    return [2, targetDir];
            }
        });
    });
}
exports.createWorkspace = createWorkspace;
function mkdirPromise(dir, opts) {
    return new Promise(function (resolve, reject) {
        mkdirp_1.default(dir, opts, function (err, made) { return (err === null ? resolve(made) : reject(err)); });
    });
}
function createFS(targetDir, content) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, mkdirPromise(targetDir, {})];
                case 1:
                    _a.sent();
                    return [4, Promise.all(Object.keys(content).map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var realPath, containingFolder, filePath;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        realPath = path_1.default.join(targetDir, key);
                                        containingFolder = path_1.default.dirname(realPath);
                                        return [4, mkdirPromise(containingFolder, {})];
                                    case 1:
                                        _a.sent();
                                        filePath = path_1.default.resolve(targetDir, key);
                                        return [4, fs_1.promises.writeFile(filePath, content[key])];
                                    case 2:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
function enrichContentWithDefaults(content, options) {
    var packageJSON = Object.assign({
        name: options.name,
        description: "Testing " + options.name,
        version: '0.0.1',
        bit: {
            env: {
                compiler: {
                    meta: {
                        options: {
                            file: path_1.default.resolve(options.env)
                        }
                    }
                },
                tester: {
                    meta2: {
                        options: {
                            file: options.envTester ? path_1.default.resolve(options.envTester) : ''
                        }
                    }
                }
            },
            componentsDefaultDirectory: 'components/{name}',
            packageManager: 'npm'
        }
    }, options.packageJSON || {});
    content['package.json'] = content['package.json'] || JSON.stringify(packageJSON, null, 4);
    content['.gitignore'] = content['.gitignore'] || "dist\nnode_modules\n";
}
