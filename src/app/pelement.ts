export class PElement {
    xPos:number;
    yPos:number;
    name:string;
    atomicNumber:number;
    mass:number;
    category:string;
    symbol:string;

    constructor(x:number,y:number,name:string,atomicNumber:number,mass:number,category:string, symbol:string){
        this.xPos=x;
        this.yPos=y;
        this.name=name;
        this.atomicNumber=atomicNumber;
        this.mass=mass;
        this.category=category;
        this.symbol=symbol;
    }
}
