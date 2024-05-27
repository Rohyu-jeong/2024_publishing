// const ameBtn = document.querySelector(".ameBtn");
// const latBtn = document.querySelector(".latBtn");
// const total = document.querySelector(".total");
// let totalPice = 0;

// ameBtn.addEventListener('click', () => {
//     totalPice += 3000
//     total.innerText = `총액 ${totalPice}원`
// });

// latBtn.addEventListener('click', () => {
//     totalPice += 4000
//     total.innerText = `총액 ${totalPice}원`
// });


// const list = [
//     {
//         coffeeName: "아메리카노",
//         coffeePrice: 3000
//     },
//     {
//         coffeeName: "라떼",
//         coffeePrice: 4000
//     }
// ];

// const total = document.createElement("div");
// let totalPice = 0;

// list.forEach((v) => {
//     const btn = document.createElement("button");

//     btn.innerText = v.coffeeName;
//     document.body.appendChild(btn);
//     let totalPrice = 0;

//     btn.addEventListener('click', () => {
//         totalPrice += v.coffeePrice;
//     })
//     total.innerText = `총액 ${totalPrice}`
//     document.body.appendChild(total);
    
// })

const menus = [
    {
        coffeeName: "아메리카노",
        coffeePrice: 3000
    },
    {
        coffeeName: "라떼",
        coffeePrice: 4000
    },
    {
        coffeeName: "레몬에이드",
        coffeePrice: 3500
    },
    {
        coffeeName: "솔의눈",
        coffeePrice: 2500
    },
    {
        coffeeName: "카스",
        coffeePrice: 4000
    },
    {
        coffeeName: "바나나 우유",
        coffeePrice: 2000
    },
    {
        coffeeName: "사이다",
        coffeePrice: 1500
    },
    {
        coffeeName: "제로콜라",
        coffeePrice: 2000
    },
    {
        coffeeName: "데자와",
        coffeePrice: 3000
    },
    {
        coffeeName: "비타오백",
        coffeePrice: 500
    },
    {
        coffeeName: "요거트스무디",
        coffeePrice: 6000
    },
    {
        coffeeName: "초코우유",
        coffeePrice: 3000
    },
    {
        coffeeName: "돌체라떼",
        coffeePrice: 4000
    },
    {
        coffeeName: "딸기라떼",
        coffeePrice: 3500
    },
    {
        coffeeName: "민트라떼",
        coffeePrice: 5000
    },
    {
        coffeeName: "비타천",
        coffeePrice: 1000
    },
    {
        coffeeName: "테라",
        coffeePrice: 2500
    }
]

const makeName = (name) => {
    const h3 = document.createElement("h3"); // 메뉴 이름 넣는 태그 생성
    h3.innerText = name; // 메뉴 이름
    return h3;
};

const makePrice = (price) => {
    const h5 = document.createElement("h5"); // 가격 넣는 태그 생성
    h5.innerText = price + "원"; // 메뉴 가격
    return h5;
};

const makeButton = (price) => {
    const btn = document.createElement("button"); // 추가하기 버튼 생성
    btn.innerText = "추가하기";
    btn.addEventListener("click", () => { // 버튼 눌렀을 때
        const total = document.querySelector(".total"); // 총액 태그 불러옴
        total.innerText = parseInt(total.innerText) + price + "원"; // 총액에 금액을 더하고 텍스트에 넣음
    })
    return btn;
}

const makeCoffee = (coffeeObj) => {
    const coffeeBox = document.createElement("div"); // 메뉴 들어갈 박스 생성
    coffeeBox.appendChild(makeName(coffeeObj.coffeeName)); // 이름 함수 호출 후 박스에 붙임
    coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice)); // 가격 함수 호출 후 박스에 붙임
    coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice)); // 버튼 함수 호출 후 박스에 붙임
    document.querySelector(".menu").appendChild(coffeeBox); // 메뉴 섹션 밑에 붙임
}

menus.forEach((v) => makeCoffee(v)); // 메뉴들을 불러와 만듦

// const total = document.createElement('div');
// let totalPrice = 0;

// list.forEach((v) => {
//     const div = document.createElement('div');
//     div.innerText = `${v.coffeeName} ${v.coffeePrice}원`
//     const btn = document.createElement('button');
//     btn.innerText = "추가하기";
//     div.appendChild(btn)
    
//     btn.addEventListener('click', () => {
//         totalPrice += v.coffeePrice;
//         total.innerText = `총액 ${totalPrice}원`
//     })
// })

// document.body.appendChild(total)