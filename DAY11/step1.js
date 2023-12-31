//p.116 자료형 변환

//1.문자열 입력 [prompt() : 입력받은 내용을 반환하는 알람함수]
const input = prompt("message" , "기본값");
    //실행순서[컴퓨터는 멀티X 무조건 순차처리]
    //1. prompt("message" , "기본값");   : [실행] 클라이언트에게 입력받는 알람함수
    //2. prompt() 결과/ 반환/ 리턴된 값   : [실행 결과]
    //3. const input = 리턴된 값         : [실행 결과 저장]
alert(input);

//2.불 입력 [confirm() : 확인[true]/취소[false] 를 반환하는 알람함수]
const input2 = confirm('수락하시겠습니까?');
alert(input2);

//3.숫자 자료형으로 변환하기 [Number() : 문자열 자료형을 숫자형으로 변환하는 함수]
console.log(Number("174"));
console.log(Number("a"));   // NaN => not a number // 숫자로 표현할 수 없음
console.log(Number(true));  // true = 1 , false 0 

//4.숫자 연산을 사용해 자료형으로 변환하기 [*단 숫자+'문자열' : 연결연산자 조심]
console.log("52"-3);    //49    결과의 자료형이 숫자로 변환
console.log(true - 1);  //0     
console.log(true + 1);  //2

//5.문자열 자료형으로 변환하기 [String() : 문자열로 변환 함수 vs 데이터+""]
console.log(String(52.273));    // 52.273 -> "52.273"
console.log(String(true));      // true -> "true"

console.log(52.273+"");         // 52.273 -> "52.273" [연결연산자 이용]
console.log(true+"");           // true -> "true"

//6.불 자료형으로 변환하기 [Boolean() : 불 자료형으로 변환 함수]
console.log(Boolean(0));        //false
console.log(Boolean(NaN));      //false
console.log(Boolean(""));       //false
console.log(Boolean(null));     //false
let 변수 ;
console.log(Boolean(변수));     //false     값이 없으면 false / 있으면 true

//7.논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);          // 0 = false, 1 = true, [값이 없으면 false / 있으면 true] 273 = true, !273 = false
console.log(!!273);         // true
console.log(!0);            // 0 : false -> true

//p.124 예제
    //프로그램 기본 : 입력 -> 처리 -> 결과
    //웹프로그램 기본 : 프론트엔드HTML[<input>] -> 백엔드JAVA -> 프론트엔드HTML[<TABLE>]

    //1.[입력]
const rawInput = prompt('inch 단위의 숫자를 입력해주세요')
    //2.[처리]
//const inch = Number(rawInput)
const cm = rawInput*2.54    //연산을 통해서 자동으로 자료형이 반환
    //3.[출력]
alert(`${rawInput}inch는 ${cm}cm 입니다.`)


//앞으로의 웹개발 방향
function 변환기능(){
    const 인치 = document.querySelector('input');
    console.log(인치);
    console.log(인치.value);
        // ducument : HTML 뜻
        // query : 질의 / 요청
        // Selector : 선택
            // document.querySelector() : HTML에 요소 선택.
            // HTML 요소를 JS의 변수/객체 로 가져오기 함수
    //----------->처리----------->java에게 통신으로 보내기
    //결과 = input에 입력받은 value를 h3[ innerHTML=마크업사이에 ] 에 대입
    document.querySelector('h3').innerHTML = `${인치.value*2.54}cm`
}
//선언 약속/규칙/문법 : 변수 = let , 상수 = const, 함수 = function    
//function 함수명( 매개변수 ){ 구현할기능코드}

//p.126
//문제3
const 숫자 = prompt('숫자를 입력해주세요')
const 센치 = Number(숫자)
const inch = 센치/2.54
console.log(`${센치}cm는 ${inch}inch 입니다.`)

//문제4
const 반지름 = Number(prompt('반지름을 입력해주세요')) 
const 넓이 =  반지름*반지름*3.14
const 둘레 = 2*3.14*반지름
console.log(`원의 반지름: ${반지름} 원의 넓이: ${넓이} 원의 둘레${둘레}`)

//문제5
const 달러 = Number(prompt("달러 단위 입력"))
const 원화 = 달러*1207
console.log(`달러: ${달러} -> 원화: ${원화}`)

/*
문제6
각 생활에서 사용되는 기계/프로그램들 예시 만들기
키오스크, 엘레베이터, 자율주행자동차
1.저장/변수 5개 : 메뉴, 결제방식, 포인트적립, 영수증출력, 주문가격 
2.기능/함수 5개 : 
3.경우의수/논리 5개 :
*/