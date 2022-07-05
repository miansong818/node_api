/* eslint-disable max-len */
const data= {
  // reactjs format {getter, setter}
  employees: require('../data/employee.json'),
  setEmployees: (data)=>{
    this.employees = data;
  },
};

const getAllEmployees = (req, res)=>{
  res.json(data.employees);
};
const getAllEmployeeById = (req, res)=>{
  const employee = data.employees.find((emp)=>emp.id ===parseInt(req.body.id));
  if (!employee) {
    return res.status(400).json({'message': `Employee ID ${req.body.id} not found.`});
  }

  data.setEmployees(employee);
  res.json(employee);
};
const createEmployee = (req, res)=>{
  const newEmployee = {
    'id': data.employees[data.employees.length-1].id+1 || 1,
    'firstName': req.body.firstName,
    'lastName': req.body.lastName,
  };
  if (!newEmployee.firstName || !newEmployee.lastName) {
    return res.status(400).json({'message': 'First and last name are required.'});
  }

  const newEmployees = [...data.employees, newEmployee];
  data.setEmployees(newEmployees);
  res.json(newEmployees);
};

const updateEmployee = (req, res)=>{
  const employee = data.employees.find((emp)=>emp.id ===parseInt(req.body.id));
  if (!employee) {
    return res.status(400).json({'message': `Employee ID ${req.body.id} not found.`});
  }
  if (req.body.firstName) employee.firstName = req.body.firstName;
  if (req.body.lastName) employee.lastName = req.body.lastName;
  const filteredArray = data.employees.filter((emp)=>emp.id!==parseInt(req.body.id));
  const sortedArray = [...filteredArray, employee].sort((a, b)=>a.id>b.id ? 1 : a.id<b.id?-1:0);
  console.log(sortedArray);
  data.setEmployees(sortedArray);
  res.json(sortedArray);
};

const deleteEmployee =(req, res)=>{
  const employee = data.employees.find((emp)=>emp.id ===parseInt(req.body.id));
  if (!employee) {
    return res.status(400).json({'message': `Employee ID ${req.body.id} not found.`});
  }
  const filteredArray = data.employees.filter((emp)=>emp.id!==parseInt(req.body.id));
  data.setEmployees(filteredArray);
  res.json(filteredArray);
};

module.exports = {
  getAllEmployeeById,
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
