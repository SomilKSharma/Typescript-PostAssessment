export class Account{
    constructor(
        public username: string,
        public password: string,
        public accessible:boolean = true
    ){}
}