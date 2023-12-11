/*
    변수/상수 : 자료를 저장해서 반복적으로 호출 재사용[재활용]
    함수 : 코드를 저장해서 호출을 여러번 가능[재활용] 
 */

/* if문 연습문제 */
    /*prompt 대신에 input으로 입력받기 */
    /*풀이결과를 console.log 대신에 span에 출력 */

    //참고
    //1.HTML 마크업 정보를 JS변수로 가져오는 함수
        //document.querySelector('마크업 또는 #id명 또는 .class명')
    //2.value 속성 값 가져오기
        //document.querySelector('마크업 또는 #id명 또는 .class명').value
    //3. .innerHTMl 속성
        //document.querySelector('마크업 또는 #id명 또는 .class명').innerHTML = 출력하고 싶은 문자열
//문제1. 3개 점수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.
    //-함수선언
function 연습버튼을클릭했을떄실행되는코드모음상자(){
    //1.[입력]
    //input에 입력받은 값 가져오기
    let value1= document.querySelector('#input1').value;
    let value2= document.querySelector('#input2').value;
    let value3= document.querySelector('#input3').value;

    //2.[처리]
    let sumValue = Number(value1) + Number(value2)+ Number(value3)
    let avgValue = sumValue/3

    //3.[출력]
    document.querySelector('#result').innerHTML = `총점 : ${sumValue}점 평균 : ${avgValue}점`
}

//문제2. 2개의 정수를 입력받아 더 큰수를 출력
function 문제2함수(){
    //입력
    let value1= document.querySelector('#input1').value;
    let value2= document.querySelector('#input2').value;

    //처리
    let result = ""; //결과변수[ if조건에 따른 실행코드 결과를 저장하는 변수]
        //처음에는 빈문자열

        
    if(value1>value2){result = value1}
    else if(value1<value2){result = value2}
    else{result='두수는 같다.'}

    //출력
    document.querySelector('#result').innerHTML = `${result}`
}
//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    let value1= Number(document.querySelector('#input1').value); console.log(value1);
    let value2= Number(document.querySelector('#input2').value); console.log(value2);
    let value3= Number(document.querySelector('#input3').value); console.log(value3);

    let result = "";
    /*
        let max = value1;
        if(max<value2){max=value2;}
        if(max<value3){max=value3;} //위에 조건을 충족해도 현재조건 또한 검사를 해야하므로 else if 안씀.
    
        document.querySelector('#result').innerHTML = `${max}`
    */
    if(value1>value2){
        if(value1>value3){result = value1}
        else{result = value3}
    }else{
        if(value2>value3){result=value2}
        else{result = value3}
    }

    document.querySelector('#result').innerHTML = `${result}`;
}


//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    let value1= Number(document.querySelector('#input1').value);

    let result=""

    if (value1>=90){result='합격';}
    else{result='탈락';}

    document.querySelector('#result').innerHTML = `${result}`;

}

/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    let value1= Number(document.querySelector('#input1').value);

    let result=""

    if(value1>=90){result='A등급';}
    else if(value1>=80){result='B등급';}
    else if(value1>=70){result='C등급';}
    else{result='재시험';}

    document.querySelector('#result').innerHTML = `${result}`;

}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6함수(){
    let value1= document.querySelector('#input1').value;
    let value2= document.querySelector('#input2').value;

    let result = ""
    
    if(value1='admin'){
        if(value2='1234'){result='로그인성공'}
        else{result='로그인실패'}
    }else{result='로그인실패'}

    document.querySelector('#result').innerHTML = `${result}`;
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 

