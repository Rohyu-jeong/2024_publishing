const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"]

// 1.
fruits.forEach((v) => {
    const isA = v.includes('a')
   if (isA) {
    console.log(v.toUpperCase())
   } else {
    console.log("🤐")
   }

   // console.log(v.includes('a') ? v.toUpperCase() : "🤐")
})

// 2.
fruits.forEach((v) => {
    const isB = v.includes('b')
    if (isB) {
        console.log(v.split('b'))
    } else {
        console.log("🤐")
    }

    // console.log(v.includes('b') ? v.split('b') : "🤐")
})

// 3.
let result = ""
fruits.forEach((v) => {
    const isN = v.includes('n')
    if (isN) {
        result += v
    }
})
console.log(result)

// 4.
fruits.forEach((v) => {
    const len = v.length
    if (len >= 6) {
        console.log(v.replaceAll("a", "k"))
    } else {
        console.log(v.toUpperCase())
    }
    
    // console.log(v.length ? v.replaceAll("a", "k") : v.toUpperCase())
})