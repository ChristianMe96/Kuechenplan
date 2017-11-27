var ShiftList = (function () {
    function ShiftList() {
        this.shiftList = [];
    }
    ShiftList.prototype.addShift = function (shift) {
        this.shiftList.push(shift);
    };
    ShiftList.prototype.get = function () {
        return this.shiftList;
    };
    ShiftList.prototype.filterTimeSpan = function (from, to) {
    };
    return ShiftList;
}());
