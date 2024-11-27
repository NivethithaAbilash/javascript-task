const employeeDetails =[
  {id:1,name:"nive",department:"hr",salary: 20000 ,experience:2,bonusPercentage:10},
  {id:2,name:"abi",department:"engineer",salary: 10000,experience:1,bonusPercentage:20},
  {id:3,name:"viji",department:"sales",salary: 50000,experience:4,bonusPercentage:5},
  {id:4,name:"karpagam",department:"engineer",salary: 70000,experience:2,bonusPercentage:30},
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
// total compensation






