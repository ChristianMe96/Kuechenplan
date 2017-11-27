class Shift{
    private name: string = '';
    private day: number = null;
    private timeSpan = {
        from: 0,
        to: 0
    };
    constructor(name, day){
        this.name = name;
        this.day = day;
    }
}