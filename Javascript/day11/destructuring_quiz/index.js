import { backendData } from "./data.js";

backendData;

// 1. {id, Currency, money, phone}
// const data1 = backendData.map(({id, Currency, money, phone}) => ({id, Currency, money, phone}))
// console.log(data1)

// 2. {animal, car: {make, model, year}} 
// const data2 = backendData.map(({animalName:animal, carMake, carModel, carModelYear}) => ({animal, car:{carMake, carModel, carModelYear}}));
// console.log(data2)

// 3. ipaddress가 맨 마지막 세자리가 합이 10이하이면, {id, color}
 const data3 = backendData.filter(({ipAddress}) => {
    let result;
    ipAddress.split(".")[3].split("").map((v) => result += parseInt(v))
    return result <= 10;
 }).map(({id, color}) => ({id, color}));
 console.log(data3)
 
 // findLastIndex

 const c = backendData.filter(({ipAddress}) => {
   const ipArr = [...ipAddress]
   const lastDotIndex = ipArr.findLastIndex((v) => v === ".")
   const splicedArr = ipArr.splice(lastDotIndex + 1, ipArr.length).map((v) => parseInt(v))
   const sum = splicedArr.reduce((a, c) => a + c)
   return sum <= 10;
 }).map(({id, color, ipAddress}) => ({id, color, ipAddress}));


// 4. timezone이 알파벳 모음으로 시작하면, {timezone, carmake, phone [앞 세자리]}
// const data4 = backendData.filter(({timezone}) => )






// 5. money가 50000엔 이하이면, {phone[하이픈 제거]과 appName[대문자화하고] 가져오기}