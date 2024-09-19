class human {
    private _bloodCount : number = 1;
    constructor(
        public email: string,
        name: string,
        private userId: string

    )   {}

    get getAppleEmail(): string{
        return "slt.com"
    }
    get getBloodCount() : number{
        return this._bloodCount;
    }
    set setBloodCount(count: number){
        this._bloodCount = count;
    }
}