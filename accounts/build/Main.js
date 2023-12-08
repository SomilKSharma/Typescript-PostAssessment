"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountList_1 = require("./AccountList");
const r = __importStar(require("readline-sync"));
const accountList = new AccountList_1.AccountList();
function main() {
    while (true) {
        Options();
        let option = r.question('Give your input.');
        if (option == '3')
            return;
        takeAction(option);
    }
}
function Options() {
    console.log(`************`);
    console.log(`1. Create New Account.`);
    console.log(`2. Login.`);
    console.log(`3. Exit.`);
}
function takeAction(option) {
    if (option === '1') {
        accountList.addAccount();
    }
    else if (option == '2') {
        accountList.login();
    }
}
main();
