type Juice = {
    name: string,
    kcal: number,
}

type Carbonated = {
    gas: number,
    color: string,
}
// Hybrid Type
type SoftDrink = Juice & Carbonated;
// const coke: SoftDrink = {}

interface Fruit {
    name: string,
    kcal: number,
}

interface TropicalFruit extends Fruit {
    sugarLevel: number,
}

const Mango:TropicalFruit = {
    name: "망고",
    kcal: 5,
    sugarLevel: 5,
}

const tomato: Fruit = {
    name: '토마토',
    kcal: 10,
}