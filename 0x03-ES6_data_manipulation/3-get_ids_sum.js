export default function getStudentIdsSum(list) {
  return list.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue.id,
    0
  );
}
