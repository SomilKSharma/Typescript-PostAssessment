import { AccountList } from "./AccountList";
import * as r from 'readline-sync';

const accountList = new AccountList();

function main(): void{
    while (true) {
        Options();
        let option = r.question('Give your input.')
        if (option == '3') return;
        takeAction(option);
    }
}

function Options(): void{
    console.log(`************`);
    console.log(`1. Create New Account.`);
    console.log(`2. Login.`);
    console.log(`3. Exit.`);
}

function takeAction(option: string): void{
    if (option === '1') {
        accountList.addAccount();
    } else if (option == '2') {
        accountList.login();
    }
}

main();
