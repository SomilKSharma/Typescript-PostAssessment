"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password, accessible = true) {
        this.username = username;
        this.password = password;
        this.accessible = accessible;
    }
}
exports.Account = Account;
