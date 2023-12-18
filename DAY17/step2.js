/*
    JS 자료형
        1.숫자          1 , 2 , 3
        2.문자열        "" 또는 '' 또는 ``
        3.불            true vs false
        4.undefined     자료데이터 없다.    undefined vs " " vs 0
        5.배열(array)   [자료,자료,자료]
                        -[숫자, 문자열, 불, 배열]
        6.함수          function
                        -1. const/let 변수명 = function(){ }
                        -2. function 함수명(){ }
        7.객체(object)  { key : value, key : value, key : value }
                        -{
                            key : 1,
                            key : "유재석",
                            key : true,
                            key : [ ],
                            key : { },
                            key : ( ),
                            key : function(){ }
                        }
*/

//p.246
console.log({ }); // Object

//1.Object객체를 만들어서 상수에 대입
const product={
    제품명 : '7D 건조 망고', //key '제품명', value '7D 건조 망고'=속성property
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
}

//2.객체호출
console.log(product);

//3.객체내 속성호출     객체명['keyName'] vs 객체명.keyName : 해당하는 키의 값을 호출
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);
console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

//p.248
const 객체2 = {
    number : 273,
    string : `구름`,
    boolean : true,
    array : [52, 273, 103, 32],
    method : function(){ },
    //객체3 : {method2 function(){}}
}
console.log(객체2);     //console : 객체 내 log속성에 함수 호출
//document.querySelector(); //document 객채 내 .querySelector속성에 함수 호출
//.(온점) : 접근연산자 : 객체내 속성에 접근
객체2.method();                 //객채2내 속성(메소드)호출
//객체2.객체3.method2();   //객체2 내 속성 (객채 내 속성(메소드2) 호출) 호출

//p.249
const pet = {
    name: '구름',
    eat : function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`);
        //this 는 함수내에서 현재 객체내 속성을 호출할때 사용하는 키워드
        //this.key    
    },    
    eat2(food){}    //함수명이 속석명을 대신한다.
}
pet.eat('밥')

//p.249~250
const student = {}
student.이름='윤인성'
student.취미='악기'
student.장래희망='생명공학자'

console.log(student);

//p.251 : 속성제거
delete student.장래희망;
console.log(student);

//p.254
/*
    1.
    const object={
        name : '혼자 공부하는 파이썬',
        price : 180000,
        publisher : '한빛미디어'
    }
    
*/