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
exports.AccountList = void 0;
const Account_1 = require("./Account");
const r = __importStar(require("readline-sync"));
class AccountList {
    constructor() {
        this.accountList = [];
    }
    addAccount() {
        const username = this.getString('Username');
        const password = this.getString('Password');
        this.accountList.push(new Account_1.Account(username, password));
    }
    login() {
        const username = this.getString('Username');
        const getAccount = this.checkAccount(username);
        if (!getAccount) {
            console.log(`Account not found.`);
        }
        else {
            if (!getAccount.accessible) {
                console.log(`Account not accessible.`);
                this.unlock(getAccount);
            }
            else {
                const password = this.getString('Password');
                if (password === getAccount.password) {
                    console.log(`Login Done`);
                }
                else {
                    console.log(`Wrong Password.`);
                    console.log(`Account Locked.`);
                    getAccount.accessible = false;
                    setTimeout(() => {
                        getAccount.accessible = true;
                    }, 0);
                }
            }
        }
    }
    unlock(account) {
        console.log(`Do you wish to unlock your account?`);
        const value = this.getUnlockOffer();
        if (value == 'yes') {
            this.changePassword(account);
        }
        else {
            console.log(`Wait for 15 seconds.`);
        }
    }
    checkAccount(username) {
        const index = this.accountList.findIndex(acc => acc.username === username);
        if (index == -1) {
            return;
        }
        return this.accountList[index];
    }
    getString(value) {
        let input = '';
        while (!input) {
            input = r.question(`Enter a valid ${value}.`);
        }
        return input;
    }
    getUnlockOffer() {
        let input = '';
        while (input != 'yes' && input != 'no') {
            input = r.question('Enter yes or no.');
        }
        return input;
    }
    changePassword(account) {
        const password = this.getString('New Password');
        account.password = password;
        account.accessible = true;
    }
}
exports.AccountList = AccountList;
