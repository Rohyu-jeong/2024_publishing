// 참조: array, element, object

const coffee = {
    coffeeName: "아메리카노",
    coffeePrice: 2000,
    hasShot: true,
}

const coffee1 = {
    coffeeName: "라떼",
    coffeePrice: 2500,
    hasShot: true,
}

const book = {
    bookTitle: "해리포터",
    author: "조앤",
    publishedYear: 1999,
    pages: 500,
}

book['bookTitle'] // 해리포터
book.bookTitle // 해리포터

book.color = "green" // color:"green" 추가
delete book.pages // 페이지 삭제

'author' in book // true or false