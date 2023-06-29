export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this.code;
  }
  get name() {
    return this._name;
  }

  set code(newcode) {
    this.code = newcode;
  }

  set name(newname) {
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
