var EmployeesList = (function () {
    function EmployeesList() {
        this.employeeList = [];
    }
    EmployeesList.prototype.addEmployee = function (employee) {
        this.employeeList.push(employee);
    };
    EmployeesList.prototype.get = function () {
        return this.employeeList;
    };
    EmployeesList.prototype.getLowComplexity = function () {
        // Todo: Filter
        return this.employeeList;
    };
    EmployeesList.prototype.loadEmployeesList = function () {
    };
    return EmployeesList;
}());
