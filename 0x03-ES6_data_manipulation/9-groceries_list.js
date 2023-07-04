export default function groceriesList() {
  const createMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  //   get all the keys in the object into an array
  const list = Array.from(object.keys(obj));
  //   map through the array and for each item, set the value to the key in the finalMap
  list.map((item) => createMap.set(item, obj[item]));
  return createMap;
}
