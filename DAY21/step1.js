//p.276 : Math 객체

const num = Math.random(); //0 ~ 1 사이 난수.
console.log(num);

//0이상 10미만 사이 난수
console.log(num*10);
//0이상 50미만 사이 난수
console.log(num*50);
//1이상~51미만 사이 난수
console.log(num*50+1);

//-5이상~5미만 사이 난수
console.log(num*10-5);
//-25이상~25미만 사이 난수
console.log(num*50-25);

console.log(Math.floor(3.78));  //Math.floor 소수점 버림
console.log(parseInt(3.78));  //parseInt() 소수점 버림
console.log(3.78.toFixed(0));  //.toFixed 소수점 버리고 반올림 (String)


//-5이상~5미만 사이 정수만
console.log(Math.floor(num*10-5));
//-25이상~25미만 사이 난수
console.log(Math.floor(num*50-25));

//p.291 : 객체 속성 여부 확인
const object = {
    name : '혼자 공부하는 파이썬',
    price : 10000,
    publisher : '한빛미디어'
}
// - 변수/상수 이름 정의할때 주의점 : 1. 숫자시작x 2.일부특수문자만가능 3.띄어쓰기x 4.키워드x

if(object.name !== undefined){console.log('name속성존재')}
else{console.log('name속성이 없습니다.')}

if(object.author !== undefined){console.log('author 속성이 있습니다.')}
else{console.log('author속성이 없습니다.')}