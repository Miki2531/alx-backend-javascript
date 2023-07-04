export default function hasValueFormArray(set, list) {
  let response = true;
  list.map((obj) => {
    if (!set.has(obj)) {
      response = false;
    }
  });
  return response;
}
