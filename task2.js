const employeeDetails =[
  {id:1,name:"nive",department:"hr",salary: 20000 ,experience:2,bonusPercentage:10},
  {id:2,name:"abi",department:"engineer",salary: 10000,experience:1,bonusPercentage:20},
  {id:3,name:"viji",department:"sales",salary: 50000,experience:4,bonusPercentage:5},
  
  {id:1,name:"nive",department:"hr",salary: 20000,experience:2,bonusPercentage:10},
  ];
console.log(employeeDetails);

//remove duplicates
function removeDuplicates(employeeDetails) {
  const uniqueEmployee = new Set();
  const uniqueEmployeeList = [];
  
  for (const employee of employeeDetails) {
    if (!uniqueEmployee.has(employee.id)) {
      uniqueEmployee.add(employee.id);
      uniqueEmployeeList.push(employee);
    }
  }
  return uniqueEmployeeList;
}
const uniqueEmployees = removeDuplicates(employeeDetails);
console.log(uniqueEmployees);

//filter
const chosenDepartment = "hr";
function filterEmployee(uniqueEmployees) {
return uniqueEmployees.filter(
  (employee) => employee.department === chosenDepartment
);
}
const filteredEmployees = filterEmployee(uniqueEmployees);
console.log(filteredEmployees);
//total compensation
function totalCompensation(employees) {
  return employees.map((employee) => {
    let bonus = (employee.bonusPercentage / 100) * employee.salary;

    if (employee.department === "hr" && employee.salary < 50000) 
      {
      bonus = bonus+ 0.1 * employee.salary; 
    } else if (employee.department === "engineer" && employee.experience > 2) {
      bonus = bonus+ 0.15 * employee.salary; 
      
    } else if (employee.department === "sales")
       {
        
      const sales = 0; 
      if (sales < 100000) bonus = 0.05 * employee.salary; 
      else if (sales <= 500000) bonus = 0.1 * employee.salary; 
      else bonus = 0.2 * employee.salary;
    }

   employee.bonus = bonus;
 employee.totalCompensation = employee.salary + bonus;

    return employee;
  });
}
const employeesWithCompensation = totalCompensation(uniqueEmployees);
console.log(" Total Compensation:", employeesWithCompensation);
//report


function generateReport(department) {
  const filteredEmployees = filterEmployee(uniqueEmployees, department); // Filter by department
  const employeesWithCompensationList = totalCompensation(filteredEmployees); // Calculate compensation

  
  const report = {
    [department]: employeesWithCompensationList.map(({ name, salary, bonus, totalCompensation }) => ({
      name,
      salary,
      bonus,
      totalCompensation
    }))
  };

}
const departmentReport = generateReport(chosenDepartment);
console.log("Department Report:", departmentReport);






