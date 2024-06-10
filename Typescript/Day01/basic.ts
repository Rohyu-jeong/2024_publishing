const b:string = "hello world";
const b1:number = 123;
const b2:boolean = !!123;
const b3:null = null;
const b4:undefined = undefined;

const b5:object = {
    name: '아아',
    price: 2500
};
const b6: {} = {
    name: '라떼',
    price: 3000
}

// 타입 추론
const b7:number[] = [1, 2, 3, 4, 5];

// 최후의 보루임 anyscript -> javascript
const b8:any = "하고싶은대로"

// boolean, null, undefined