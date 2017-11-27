var TaskEmployee = (function () {
    function TaskEmployee(tasksList, employeeList) {
        var _this = this;
        this.taskEmployeeList = [];
        this.taskList = null;
        this.employeeList = null;
        this.taskList = tasksList;
        this.employeeList = employeeList;
        //this.assignEmployees();
        //this.nextEmployees();
        tasksList.get().forEach(function (task) {
            task.getShiftList().get().forEach(function (shift) {
                _this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });
            });
        });
        console.log(this.taskEmployeeList);
        this.assignEmployees();
    }
    TaskEmployee.prototype.assignEmployees = function () {
        var _this = this;
        this.taskEmployeeList.forEach(function (taskEmployee) {
            // get next employee with low complexity and shift
            var nextEmployee = _this.employeeList.getLowComplexity()[0];
            taskEmployee.employee = nextEmployee;
            nextEmployee.addComplexity(taskEmployee.task.getComplexity());
        });
    };
    return TaskEmployee;
}());
