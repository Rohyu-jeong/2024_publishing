// union[=or]

const user: string | number = "1";
const isLoggin: boolean | null = false;
const box: Element | null = document.querySelector('.box');

// 개 - 푸들, 시바, 치와와, 시츄, ...
// Element - div, section, input, button, ...
const newDiv: Element = document.createElement("div");

// 커피 -> {name, price, shot} or {name, price, kcal}
const coffee: {name:string, price:number, shot:number} | {name:string, price:number, kcal:number} = {name: "라떼", price: 1000, shot: 1};

// intersection[=and] & 
// never: 있을 수가 없음
// unknown: 모름
// () => type: 함수 지정 타입
// Solid 원칙 => d: 저수준 모듈 => 고수준 모듈 만드셈
// ex: [타이어, 엔진, 벨트, 시트] => 자동차

const person: {name:string} & {age:number} & {eat:() => void}= {
    name: "김타입",
    age: 21,
    eat: () => {
        console.log("밥꿀맛");
    },
}

