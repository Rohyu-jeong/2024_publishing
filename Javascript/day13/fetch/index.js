// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// 1. stateLess[request//response]
// 2. 쿠키, 세션, JWT
//  -1. 무신사 들어옴
//  -2. 로그인을 함[쿠키, 세션, JWT 받음]
// 3. restful api

// const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v))

// const data = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
// data.then((v) => v.json()).then((v) => console.log(v))


// card - image, title, author, description 
const data = fetch("https://fakerapi.it/api/v1/books?_quantity=20");

const cardList = document.querySelector(".cardList");

data.then((v) => v.json()).then(({data}) => {
    data.forEach((v1) => {
        cardList.insertAdjacentHTML("beforeend", 
        `
        <div class="box">
            <div class="imgBox">
                <img src="https://picsum.photos/200/300" alt="">
            </div>
            <div class="info">
                <div class="title">
                    ${v1.title}
                </div>
                <div class="author">
                    ${v1.author}
                </div>
                <div class="description">
                    ${v1.description}
                </div>
            </div>
        </div>
        `)
    })
});




