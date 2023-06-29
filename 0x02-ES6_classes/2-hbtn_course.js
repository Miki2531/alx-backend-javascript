export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") throw TypeError("name must be string");
    if (typeof length !== "number") throw TypeError("length must be number");
    if (
      students.constructor !== Array &&
      students.every((el) => typeof el === "string")
    ) {
      throw TypeError("student must be array of string");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._length;
  }

  set name(newname) {
    if (typeof newname !== "srting") throw TypeError("name must be string");
    this.name = newname;
  }

  set length(newlength) {
    if (typeof newlength !== "number") throw TypeError("length must be number");
    this._length = newlength;
  }

  set students(newstudents) {
    if (
      newstudents.constructor !== Array &&
      newstudents.every((el) => typeof el === "string")
    ) {
      throw TypeError("students must be an array of strings");
    }
    this._students = newstudents;
  }
}
