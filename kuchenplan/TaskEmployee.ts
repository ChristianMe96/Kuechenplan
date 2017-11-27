class TaskEmployee{
    private taskEmployeeList=[];


    private taskList = null;
    private employeeList = null;

    constructor(tasksList, employeeList){
        this.taskList = tasksList;
        this.employeeList = employeeList;

        //this.assignEmployees();
        //this.nextEmployees();


        tasksList.get().forEach((task: Task) => {
            task.getShiftList().get().forEach((shift: Shift) => {

                this.taskEmployeeList.push({
                    shift: shift,
                    task: task,
                    employee: null
                });


            });
        });


        console.log(this.taskEmployeeList);

        this.assignEmployees();

    }

    public assignEmployees(){
        this.taskEmployeeList.forEach((taskEmployee)=>{

            // get next employee with low complexity and shift
            let nextEmployee: Employee = this.employeeList.getLowComplexity()[0];

            taskEmployee.employee = nextEmployee;

            nextEmployee.addComplexity(taskEmployee.task.getComplexity());
        })

    }

}
