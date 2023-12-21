
//p.267
// 1.toFixed(소수점) : 해당 소수점까지 출력[반올림]
const l = 123.456789;
console.log(l.toFixed(2));  //123.46
console.log(l.toFixed(3));  //123.457

// 2.Number(숫자) : 유효성검사 : [자료형에 따라 연산이 달라지니까. + ]
const m = Number('숫자로 변환할 수 없는 경우'); //Number('문자열');
console.log(m);                         //m : NaN
console.log(m===NaN);                   //false //NaN 비교x
console.log(Number.isNaN(m));           //true  //isNaN() 함수 이용한 비교 o

//3.isFinite(연산) : 유효성검사 : [연산의 결과 무한대 처리]
const n = 10/0;
console.log(n);
const o = -10/0;
console.log(o);
Number.isFinite(n);

//p.269
//1. .trim() : 문자열 양쪽 끝에 공백 없애기
console.log(`      앞과     뒤에         공백도 들어가고        `.trim());

//2. .split() 
const timeList='12:30\n15:20'
    console.log(timeList)
const timeArray=timeList.split('\n'); //2조각
    console.log(timeArray)
const time = timeArray[0];
    console.log(time);
const hour = time.split(':');
    console.log(hour[0]);

//3.JSON : 다른 애플케이션[JS가 아닌 프로그램]과 통신할때 데이터 교환 목적 활용
    //1.JS객체 --> JSON문자열 : JSON.stringify()
    //2.JSON문자열 --> JS객체 : JSON.parse()

//p.356
//localStorage [ JS가 커지고/사라져도 사라지지 않는 메모리 ]
    //-localStorage     : 브라우저[크롬,엣지]에 저장, 브라우저 자체가 꺼지면 사라짐, 다른 탭에서 공유
    //-sessionStorage   : 브라우저[크롬,엣지]에 저장, 탭 커지면 메모리도 사라짐, 같은 탭에서 공유
//localStorage.setItem(키,값)
localStorage.setItem('이름','유재석'); //'이름'이라는 키로 '유재석'값을 저장
console.log(localStorage.getItem('이름'));  //'이름'이라는 키를 넣어서 '유재석' 값을 호출
//예2
const 회원목록 = [{이름:'유재석'},{이름 : '강호동'}];

localStorage.setItem('회원정보목록',회원목록);
localStorage.setItem('회원정보목록2',JSON.stringify(회원목록));
