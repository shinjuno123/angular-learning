export class Status {
    public gameState: string;
    public count: number;

    constructor(gameState: string, count:number){
        this.gameState = gameState;
        this.count = count;
    }

}