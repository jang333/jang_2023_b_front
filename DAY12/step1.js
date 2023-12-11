/*
    p.142 switch 조건문
        -break
        -논리(범위)판단x / 경우의수가 값으로 정해져 있는 경우
        1.형태
            switch(자료){
                case 조건A : 실행코드; break;
                case 조건B : 실행코드: break;
                case 조건C : 실행코드: break;
                default : break;
            }        

    p.145 삼항연산자
        -간단한(조건 1개 또는 2개) 조건에 따른 결과 실행
        -조건부 렌더링[화면표현] (JS에서 많이 씀)
        1. 형태
            불 표현식 ? 참일때 결과 : 거짓일때 결과
*/
//예제1. 홀수/짝수 구분 예제 [ (짝수) 수 & 2 == 0 , (홀수) 수 % 2 == 1]
const input = Number(prompt('숫자를 입력하세요')); //숫자 입력받아 숫자자료형으로 변환 후 상수에 저장
//1-1. 예) if
if(input % 2 == 0){console.log("if 짝수입니다.");}
else if(input % 2 == 1){console.log('if 홀수입니다.');}
else{console.log("숫자가 아닙니다.");}

//1-2. 예) switch
switch(input % 2){
    case 0 : console.log("case 짝수입니다."); break;
    case 1 : console.log("case 홀수입니다."); break;
    default : console.log("숫자가 아닙니다."); break;
}

//예제2. 
const date = new Date(); //new Date(); 현재날짜/시간 알려주는 코드(객체)
const hour = date.getHours();   // .getHours() 현재날짜/시간에서 '시'만 추출 함수

//2-1
if(hour<11){console.log("아침 먹을 시간입니다.")}
else if(hour<15){console.log('점심 먹을 시간입니다.')}
else {console.log('저녁 먹을 시간입니다.')}

//2-2
switch(true){
    case hour < 11 : console.log("아침 먹을 시간입니다."); break;
    case hour < 15 : console.log('점심 먹을 시간입니다.'); break;
    default : console.log('저녁 먹을 시간입니다.'); break;
}

//3.
const input2 = prompt("숫자를 입력해주세요");
const number = Number(input2);

//3-1
if(number>=0){console.log('0이상의 숫자입니다.');}
else{console.log("0보다 작은 숫자입니다.");}

//3-2
const result = (number >= 0) ? '0 이상의 숫자입니다.'  : '0 보다 작은 숫자입니다.'
console.log(result);

//148p. 홀수 짝수 구하기
    //- 홀짝 계산식 : 수 % 2 == 0 또는 1
    //- 문자인경우 : Number(문자열[문자열.length-1]) == '0'
    
// 150p. 
const score = Number(prompt('학점을 입력해주세요','학점'));

//비효율적인 방법
if(score === 4.5){console.log('신');}
else if(4.2 <= score && score < 4.5){console.log('교수님의 사랑');}
else if(3.5 <= score && score < 4.2){console.log('현 체제의 수호자');}
else if(2.8 <= score && score < 3.5){console.log('일반인');}
else if(2.3 <= score && score < 3.5){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75 <= score && score < 2.3){console.log('오락문화의 선구자');}
else if(1.0 <= score && score < 1.75){console.log('불가촉천민');}
else if(0.5 <= score && score < 1.0){console.log('자벌레');}
else if(0 <= score && score < 0.5){console.log('플랑크톤');}
else{console.log('시대를 앞서가는 혁명의 씨앗')}

//효율적인 방법
if(score === 4.5){console.log('신');}
else if(4.2 <= score){console.log('교수님의 사랑');}
else if(3.5 <= score){console.log('현 체제의 수호자');}
else if(2.8 <= score){console.log('일반인');}
else if(2.3 <= score){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75 <= score){console.log('오락문화의 선구자');}
else if(1.0 <= score){console.log('불가촉천민');}
else if(0.5 <= score){console.log('자벌레');}
else if(0 <= score){console.log('플랑크톤');}
else{console.log('시대를 앞서가는 혁명의 씨앗')}

//153p
    //문자열.split('기준문자') : 문자열 내 특정문자 기준으로 문자열 분리 함수 / 반환 : 배열
    //'유재석,강호동,신동엽'split(',')

const rawInput = prompt('태어난 해를 입력해주세요');
const year = Number(rawInput);

const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');
        // tti 상태 : tti = [원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양]
            /* 
                '문자열/자료'.split('분리할기준문자');
                    - 분리할 기준문자는 사라지고 자료를 분리.
                    - 분리전 자료 수 1개 : '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'
                    - 분리후 자료 수 12개 : 원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양
                        -변수는 1개밖에 저장을 못하는데 ...여러개를 저장하고 싶을 때 --> 배열                
            */
console.log(tti[0]); //원숭이
console.log(tti[8]); //용
//console.log(tti [태어난연도/12]);
console.log(`${year}년에 태어났다면 ${tti[year%12]} 띠입니다.`);

