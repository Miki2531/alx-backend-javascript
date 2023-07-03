export default function getStudentsLocation(list, city) {
  return list.filter((obj) => obj.location === city);
}
