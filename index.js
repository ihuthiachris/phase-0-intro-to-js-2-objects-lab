const employee = {
    name: 'Chris',
    streetAddress: 'Kiambu'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   const employeeCopy = employee;
   employeeCopy.name = 'Sam'

   const updatedEmployee = {...employeeCopy, streetAddress: '11 Broadway'};
   return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee, name: undefined};
    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}