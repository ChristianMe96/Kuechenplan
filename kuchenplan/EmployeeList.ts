class EmployeesList {
    private employeeList = [];


    constructor() {
    }

    public addEmployee(employee) {
        this.employeeList.push(employee);
    }
    public get(): Array<Employee>{
        return this.employeeList;
    }

    public getLowComplexity(){
        // Todo: Filter
        return this.employeeList;
    }

    public loadEmployeesList(){

    }

}