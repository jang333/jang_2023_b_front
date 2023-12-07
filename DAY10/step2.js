//p.102 : 상수와 변수

//1.상수 만들기[4단계]
    //1. const      키워드 작성                         상수인지 변수인지 식별용                        남 vs 여
    //2. 상수명     이름[식별자]                        상수가 여러개 있으므로 그 중에서 구별하기 위해    남 중에서 '유재석'
    //3. =          대입연산자[값을 변수에 넣는 역할]    오른쪽값을 왼쪽에 대입
    //4. 자료       저장할 값

const pi=3.141592;

//2. 상수 호출하는 방법[상수 이름 작성]
console.log(pi); //상수 출력
//console.log(유재석); // 유재석 is not defined - 저장된 이름이 없어서 오류발생

//3. 상수의 값을 변경하는 방법 - 불가능해서 오류발생 [상수는 값을 변경 할 수 x]
//pi = 3.97; // Uncaught TypeError: Assignment to constant variable.

const r=10;

//4. 상수의 연산
console.log( 2*pi*r); 
    //pi상수[상자]안에 있는 값 꺼내기가 우선 = 상수 호출

//5. 동일한 상수명 사용 [상수명은 식별용 이므로 중복(동일한 범위)이 불가능해서 오류발생]
//const pi = 3.97; // Uncaught SyntaxError: Identifier 'pi' has already been declared 

//6. 상수의 값 대입을 안했을때 [처음에 상수 만들때 값[초기값]을 넣는 과정 = 초기화 , 초기화가 없으면 오류발생]
//const pi2; //Uncaught SyntaxError: Missing initializer in const declaration


//p.105 변수

//1.변수 만들기[4단계]
    //1. let
    //2. 변수명
    //3. =
    //4. 값
let pi3 = 3.141592;

//2.변수 호출[변수 호출시 키워드[let,const] 쓰지x]
console.log(pi3);
console.log("pi3 : " + pi3); //연결연산자 : "문자열"+변수의값 => 문자열
console.log(`p13 : ${pi3}`); //템플릿 문자열 `문~~자~${변수/상수/자료}~~열`

//3.변수값 변경 [값 변경시에도 변수 호출후 다시 대입]
pi3 = 3.15; console.log(pi3);

//4.변수의 연산
let r3=10;
console.log(2*pi3*r3); //63

//var와 let 키워드의 차이
let value1=10;
//let value1=10;//불가능, 초기화 1번 [동일한 변수명으로 선언시 선언불가.]

var value2=10;
var value2=10; //가능, 초기화 여러번[동일한 변수명으로 선언시 동일한 이름이 있을경우 덮어쓴다.]

//p.108 복합대입연산자
let value = 10;
//컴퓨터는 동시 다발적으로 연산 처리 x -> 하나씩 처리
value+=10;
    //vs 같은 결과를 얻는 연산 표현 방법
value = value + 10; //문장
    // = 기준으로 오른쪽 연산
        // value + 10 중에서 변수 호출
    //1.10          //변수호출
    //2.10+10       //호출 후 연산
    //3.20          //연산 결과
    //4.=           //연산 후 대입
    //5.value=10    //변수 수정
console.log(value);

//*****JS에서 HTML(문자열)을 작성할때
let list = ``; //'list'라는 변수에 빈문자열을 넣은 상태로 선언

list +=`<ul>`;
list +=`    <li>hello</li>`;
list +=`    <li>JavaScript<li>`;
list +=`</ul>`;

document.write(list);

//예제1 : 2개의 숫자를 입력받아 더한 값을 html에 <h3>로 출력
    //입력받은 예) 3,5
    //HTML 출력 예) 예제1 결과 : 8
    
    //1.prompt("출력하고 싶은말"); : 입력[input] 제공하는 알람 함수
        //input 입력된 결과를 반환 [10+10=>20]
let ex1Value1 = prompt("예1 숫자를 입력하시오.");
        //만약에 10입력시 let ex1Value1=10;
console.log(typeof ex1Value1);
        //타입변환1 / 문제점 : 소수점이 있으면 사라짐
//ex1Value1 = parseInt(ex1Value1);
    //console.log(typeof ex1Value1)
        //타입변환2 [Number("숫자") -> 숫자]
ex1Value1 = Number(ex1Value1);      console.log(typeof ex1Value1);

let ex1Value2=Number(prompt("예1 2번째 숫자를 입력하시오"));
    //          함수1(함수2()); //함수2 결과를 함수 1넣고 함수1 결과 얻는 과정
    //          입력을 받고 [prompt] 입력받은 데이터를 타입 변환[Number]하고 변수에 대입

//결과
document.write(`<h3>예제1 결과 ${ex1Value1 + ex1Value2}</h3>`);

//예제2 : 2개의 숫자를 입력받아 더 큰수를 html에 <h3>로 출력
    //입력받은 예) 3,5
    //HTML 출력 예) 예제1 결과 : 5

    //1. 입력받은 데이터를 숫자 자료형으로 변환후 각 변수에 대입
let ex2Value1 = Number( prompt("예제2 1번째 숫자 입력하시오"));
let ex2Value2 = Number( prompt("예제2 2번째 숫자 입력하시오"));

console.log(ex2Value1 > ex2Value2); // 만약에 10과 20을 입력했으면 false

    //2.*
    //다항연산자 [피연산자1개], 이항연산자[피연산자2개], 삼항연산자[피연산자3개]
    //삼항연산자 - 조건 ? 참 : 거짓     [: 클론 ; 세미클론]
        //-조건[true/false] 에 따른 서로 다른 시행결과 만들기
console.log(ex2Value1 > ex2Value2 ? '진실' : '거짓')

//결과
document.write(`<h3>예제2 결과 ${ex2Value1 > ex2Value2 ? ex2Value1 : ex2Value2 } </h3>`)

    