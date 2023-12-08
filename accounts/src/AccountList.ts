import { Account } from "./Account";
import * as r from 'readline-sync';

export class AccountList{
    public accountList: Account[] = [];
    public addAccount(): void{
        const username = this.getString('Username');
        const password = this.getString('Password');
        this.accountList.push(
            new Account(username, password)
        );
    }
    public login(): void{
        const username = this.getString('Username');
        const getAccount: Account | void = this.checkAccount(username);
        if (!getAccount) {
            console.log(`Account not found.`);
        } else {
            if (!getAccount.accessible) {
                console.log(`Account not accessible.`);
                this.unlock(getAccount);
            } else {
                const password = this.getString('Password');
                if (password === getAccount.password) {
                    console.log(`Login Done`);
                } else {
                    console.log(`Wrong Password.`);
                    console.log(`Account Locked.`);
                    getAccount.accessible = false;
                    setTimeout(() => {
                        getAccount.accessible = true;
                    }, 120000)
                }
            }
        }

    }
    private unlock(account: Account): void{
        console.log(`Do you wish to unlock your account?`);
        const value = this.getUnlockOffer();
        if (value == 'yes') {
            this.changePassword(account);
        } else {
            console.log(`Wait for 2 minutes.`);
        }
    }
    private checkAccount(username: string): Account|void{
        const index: number = this.accountList.findIndex(
            acc => acc.username === username
        );
        if (index == -1) {
            return;
        }
        return this.accountList[index]
    }
    private getString(value: string): string{
        let input: string = '';
        while (!input) {
            input = r.question(`Enter a valid ${value}.`)
        }
        return input;
    }
    private getUnlockOffer(): string{
        let input: string = '';
        while (input != 'yes' && input != 'no') {
            input = r.question('Enter yes or no.')
        }
        return input;
    }
    private changePassword(account:Account): void{
        const password = this.getString('New Password');
        account.password = password;
        account.accessible = true;
    }
}