var Shift = (function () {
    function Shift(name, day) {
        this.name = '';
        this.day = null;
        this.timeSpan = {
            from: 0,
            to: 0
        };
        this.name = name;
        this.day = day;
    }
    return Shift;
}());
