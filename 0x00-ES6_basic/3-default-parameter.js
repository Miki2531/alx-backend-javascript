export default function getSumOfHoods(
  initialNumber = 1,
  expansion1989 = 1,
  expansion2019 = 1
) {
  if (expansion1989 && expansion2019 === undefined) {
    expansion1989 = 89;
    expansion2019 = 19;
  }

  return initialNumber + expansion1989 + expansion2019;
}
