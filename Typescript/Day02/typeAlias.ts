// type[타입] Alias[닉]
// const test: 1 | 2 | 3 | 4 = 2;

// 리터럴 타입
type Genre = "키덜트" | "공포" | "드라마" | "멜로" | "코믹" | "사랑" | "액션";
type Grade = "전체 이용가" | "12세" | "15세" | "18세";

type Movie = {
  name: string,
  genre: Genre[],
  grade: Grade,
};

const insideout2: Movie = {
    name: "인사이드아웃2",
    genre: ["키덜트"],
    grade: "전체 이용가",
};

const cgv:Movie[] = [
    {
        name: "영화1",
        genre: ["공포", "액션"],
        grade: "15세"
    },
    {
        name: "영화2",
        genre: ["드라마"],
        grade: "12세"
    },
    {
        name: "영화3",
        genre: ["멜로"],
        grade: "15세"
    }
]

// 함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의
// const printGenre = (movies:Movie[]) => {
//     movies.forEach((v) =>{
//         const str = "";
//         const result = v.genre.reduce((a, c) => a + c);
//         console.log(result);
//     });
// }

const makeMsgAlign = (msg:string, align: 'center' | 'start' | 'end') => {
    const span = document.createElement('span');
    span.innerText = msg;
    span.style.textAlign = align;
    return span;
}

makeMsgAlign("점메추", "center");

type Bread = {
    name: string,
    price: number,
}

type keyofBreadType = keyof Bread; // 'name' | 'price'
const apple:keyofBreadType = "price";



// type Category = "icecream" | "cake" | "cookie";
// type photoURL = {url:string};
// type Icon = {name: string} & photoURL;
// type Allergys = "우유" | "대두" | "오징어" | "호두" | "달걀" | "밀" | "땅콩" | "복숭아";

// type NutritionsInfo= {Servings: number, kcal: number, sugars: number, proteins: number, transfats: number, salts: number, allergies: Allergys[]}

// type IcecreamProductInfo = {
//     category: Category,
//     engName: string,
//     korName: string,
//     description: string,
//     mainIngredient : Icon,
//     nutrition: NutritionsInfo,

// };

// // 결합
// type Icecream = IcecreamProductInfo & NutritionsInfo & photoURL;

// // 포함
// type IcecreamComposition = {
//     IcecreamProductInfo: IcecreamProductInfo,
//     NutritionsInfo: NutritionsInfo,
//     photoURL: photoURL
// }



// const makeIcecreamJumboTron = (data:Icecream) => {
//     `<div>${data.url}</div>`
// }

