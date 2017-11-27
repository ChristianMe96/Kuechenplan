
class ShiftList{
    private shiftList = [];

    constructor(){

    }

    public addShift(shift){
        this.shiftList.push(shift);
    }

    public get(){
        return this.shiftList;
    }

    public filterTimeSpan(from, to){

    }
}