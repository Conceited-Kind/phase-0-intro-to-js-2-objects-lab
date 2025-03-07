// Write your solution in this file!

// Initialize the employee object
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

// Function to update employee with key and value non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function to update employee with key and value destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
