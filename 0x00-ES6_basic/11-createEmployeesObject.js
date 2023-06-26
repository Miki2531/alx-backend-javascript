export default function creatEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}
