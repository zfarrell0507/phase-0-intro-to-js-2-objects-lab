const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployeeWithKeyAndValue = { ...employee,
        [key]: value, };
    return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const deleteFromEmployeeByKey = { ...employee, [key]: value, }; 
    delete deleteFromEmployeeByKey.key;
    console.log(deleteFromEmployeeByKey);
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    delete employee.key;
    console.log(employee);
    return employee;
}
