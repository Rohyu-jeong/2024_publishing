const person = {
    name: 'john',
    age: 21,
    major: "computer",
};

// const {name, major} = person; 빼기
// const {name:realName, major:superMajor} = person; 빼면서 별명

// realName // john

const person1 = {
    name: "Jenny",
    address: {
        city: "bypyuong",
        zipCode: 1004,
    }
}

const {address} = person1;
const {address:{zipCode : zip}, } = person1;

const {zipCode:zip1} = person1.address;

const user = {
    username: 'alice',
    email: 'alice@example.com',
    details: {
        firstName: 'Alice',
        lastName: 'Doe'
    }
}

const {details: {lastName:familyName}} = user;
console.log(familyName);