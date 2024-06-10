// function add(x:number, y:number): string {
//     return x + y + "";
// }

// truthy or falsy 해주는 함수(string) => boolean

// function makeBoolean(x:string): boolean {
//     return !!x;
// }

// const minus = (x:number, y:number): number => x - y;

// console.log(minus(10, 5));

const  makeZodiac = (year:number): string => {
    const zodiac = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];
    const animal = zodiac[year % 12];
    
    return animal;
}

console.log(makeZodiac(2023));

const reverseNumber = (num:number):number[] => [...String(num)].reverse().map((v) => Number(v));

console.log(reverseNumber(54321));

const hateEven = (n:number):number[] => Array(n+1).fill(1).map((_, i) => i).filter((v) => v % 2);

console.log(hateEven(15));
