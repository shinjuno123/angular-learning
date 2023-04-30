import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class CounterService {
    private activeUserCounter: number;
    private inActiveUserCounter: number;

    constructor(){
      
    }

    deleteOneActiveUser(){
        this.activeUserCounter--;
    }

    deleteOneInActiveUser(){
        this.inActiveUserCounter--;
    }

    addOneActiveUser(){
        this.activeUserCounter++;
    }

    addOneInctiveUser(){
        this.inActiveUserCounter++;
    }

    setActiveUserCounter(count: number){
        this.activeUserCounter = count;
    }

    setInActiveUserCounter(count: number){
        this.inActiveUserCounter = count;
    }

    getActiveCounter(){
        return this.activeUserCounter;
    }

    getInActiveCounter(){
        return this.inActiveUserCounter;
    }
}