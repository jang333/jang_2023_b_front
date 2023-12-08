//p.131 if조건문
    //조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    //가장 일반적인 조건문 : if
/*
    형태
    1. 참일때만 실행
        if(T/F) {참/T 일때 실행되는 코드;}
    2. 참 또는 거짓일때 실행
        if(T/F) {참/T 일때 실행되는 코드;}       <------------->      삼항연산자 :   조건 ? 참 : 거짓
        else{거짓/F 일떄 실행되는 코드;}
    3. 참 또는 거짓 일때 조건추가
        if(T/F){
            if(T/F){}
            else{}
        }else{
            if(T/F){}
            else{}
        }
    4. 다수 조건 일때 [결과 : 1개} <-----------> 다수 조건 일때 [결과 : 여래개]
        if(조건1){ }                            if(조건1){}
        else if(조건2){}                        if(조건1){}
        else if(조건3){}                        if(조건1){}
        else if(조건4){}                        if(조건1){}
        else {}                                 if(조건1){}
*/

//1.if(조건) : 조건의 결과가 참이면{}안으로 들어가고 아니면 {} 못들어감.
if(273<100){
    console.log('273<100 => false'); //실행x[조건이 false이므로]
}
console.log('1종료'); //실행o [조건문과 상관이 없어요. 왜? {}밖이니까.]

//2.
const date = new Date();    //new Date(); 현재시간을 알려주는 코드[클래스]
    console.log(date);
const hour = date.getHours();   //현재시간.getHours : 현재시간에서 시분초 중에서 시 를 반환해주는 함수.
    console.log(hour);

    //1. 만약에 현재 시가 12보다 작으면 오전
if(hour<12){console.log('오전입니다.');}
    //2. 만약에 현재 시가 12보다 이상이면 오후
if(hour>12){console.log('오후입니다.')}

//3.p.134

if(hour<12){
    console.log('오전입니다.')
}else{console.log('오후입니다.')}

//4.
if(hour<11){console.log('아침 먹을 시간입니다.')}
else{ //*중첩
    if(hour<15){
        console.log('점심 먹을 시간입니다.')
    }else{
        console.log('저녁 먹을 시간입니다.')
    }//두번째 if끝

}//첫번쨰 if 끝

//5. p.137
if(hour<11){console.log('아침 먹을 시간입니다.')}
else if(hour<15){console.log('점심 먹을 시간입니다.')}
else{console.log('저녁 먹을 시간입니다.')}
                //vs
if(hour<11){console.log('아침 먹을 시간입니다.')}
if(hour<15){console.log('점심 먹을 시간입니다.')}
else{console.log('저녁 먹을 시간입니다.')}

/*
//p.140 확인문제

4번문제
if(a>0){
    console.log('입력한 숫자는 양수입니다.')
}
else if(a==0){console.log('입력한 숫자는 0입니다.')}
else {console.log('입력한 숫자는 음수입니다.')}

5번문제
if(a%2==0){console.log('짝수')}
else{console.log('홀수')}

6번문제
봄 3월~5월 / 여름 6월~8월 / 가을 9월~11월 / 겨울 12월~2월
if(a>=3 && a<=5){console.log('봄')}
else if(a>=6 && a<=8){console.log('여름')}
else if(a>=9 && a<=11){console.log('가을')}
else{console.log('겨울')}

-앞전 조 과자에 경우의수를 IF와 같이 작성해보기.
1.
if(결제방식 == 현금결제){현금결제해주십시오}
else if(결제방식 == 카드결제){카드결제해주십시오}
else{(화면유지)}

2.
if(take-out유무 == 매장이용){매장컵만 이용 가능합니다.}
else if(take-out유무 == 포장){일회용 컵만 가능합니다.}
else{(화면유지)}

3.
if(포인트 적립 유무 == 적립){
    if(주문가격 >= 50000){5% 적립}
    else if(주문가격 >= 100000){10%적립}
    else{3%적립}
}
else if(포인트 적립 유무 == 미적립){(다음 화면 이동)}
else{(화면유지)}

4.
if(영수증 출력 유무 == 출력){
    if(용지유무 == 있음){영수증 출력}
    else {"용지가 부족합니다"}
    }
else if (영수증 출력 유무 == 미출력){(다음화면 이동)}
else {(화면유지)}

5.
if(제한시간 < 100s){
    if(제한시간 <=30s) {<텍스트 : red>}
    else{<텍스트 : black>}
}else {(홈화면 이동)}

*/


