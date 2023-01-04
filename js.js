function solution(age) {
  let birth = new Date();
  let birthYear = birth.getFullYear("1983,01,01"); // 생일년도
  let today = new Date("2022,01,01"); // 오늘날짜
  let todayYear = today.getFullYear(); // 오늘년도
  let year = todayYear - birthYear; // 오늘년도 - 생일년도 = 나이
  return age;
}
