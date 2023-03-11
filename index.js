// Write your solution in this file!
// initialize employee object
const employee = {
    name: 'Lewis Obuba',
    streetAddress: '001 Main St.'
  };
  
 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }
  
 
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
 
const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(newEmployee); 

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St.');
console.log(employee); 

const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
console.log(employeeWithoutName);
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employee);
