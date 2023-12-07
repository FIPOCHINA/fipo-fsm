"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateStore = void 0;
require("reflect-metadata");
const token_1 = require("./token");
const StateStore = (machineName) => Reflect.metadata(token_1.STATE_MACHINE_STORE, machineName);
exports.StateStore = StateStore;
