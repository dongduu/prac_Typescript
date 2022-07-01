// call signature
// type SuperPrint = {
//   <T, M>(arr: T[], item?: M): T;
// };

// 함수 구현
function last<T>(arr: T) {
  return arr;
}
// const prepend: SuperPrint = (arr, item) => {
//   arr.push(item);
//   return arr;
// };

// 함수 실행
console.log(last([1, 2, 3, 4]));
//console.log(prepend([1, 2, 3, 4], 2));
