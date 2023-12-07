//p.109~110 증감연산자
    //- 복합대입연산자 간략하게 사용하려고
    //증감연산자는 무조건 1씩 증가 또는 1씩 감소만 가능 [프로그래밍에서 순차적(순서대로)처리]

let value1 = 10;

value1 = value1 + 1;    //1. 변수 호출하고 연산 후 결과를 변수에 대입
console.log(value1)     //1 증가

    //vs 1번과 2번 차이점 x

value1 += 1;            //2. 1번 간략하게 하기 위해
console.log(value1)     //1 증가

    //vs 2번과 3번 차이점 x [단 증감연산자는 1 증가/감소만 가능]

value1++;               //3. 2번 간략하게 하기 위해
console.log(value1)     //1 증가

    //vs 3번과 4번 차이점 x [후의: , 선위:]

++value1;               //3. 2번 간략하게 하기 위해
console.log(value1)     //1 증가

    //p.110
let number1=10; number1++; console.log(number1)     //후위 = 11
let number2=10; ++number2; console.log(number2)     //선위 = 11
    //차이점1  
let number3=10; console.log(number3++);     //후위 = 10
    console.log(number3);                   //     = 11
let number4=10; console.log(++number4);     //선위 = 11

    //차이점2
let result1 = number4++ +10; console.log(result1);    // = 21 대입 후 number4 증가 o
    console.log(result1);                           // = 21 result1 증가 x
    console.log(number4);                           // = 12

//undefind 찾기
let string1;        //undefind 
let string2 = 0;
let string3 = "";
let string4 = "  ";