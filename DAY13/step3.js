/*
    p.174 반복문
        - 반복 작업
        - 형태
            for(let i = 0 ; i < 반복횟수 ; i++){
                문장
            }
            for(초기값 ; 조건문 ; 증감식){실행코드;}

            1. let i = 0        : 반복을 시작할때 처음값[초기값]
                i를 0부터 시작
            2. i < 반복횟수      : 반복을 할 수 있는 조건 [조건 충족시 반복 실행]
                i는 반복횟수 보다 작으면
            3. 문장              : 반복 시 실행되는 코드
            4. i++               : 1회 반복 후 실행되는 증감식[증감식]
        
        -실행순서
            1. [초기값] 변수에 처음값을 초기화.
            2. [조건문] for{ }안/반복문 에 들어갈 수 있는지 검사[t->{ }안으로 f->{ }밖으로]
            3. [실행문] { }안에 있는 코드 모드 실행
            4. [증감식] 실행문 후에 증가 또는 감소
                //[초기값 1번만 실행되므로 증감식 이후 조건문으로 이동]
            5. [조건문] 조건검사.
            6. [실행문] 실행코드
            7. [증감식] 증감식
                //
            8. [조건문] 조건검사
            9. [실행문] 실행코드
            10.[증감식] 증감식
                // 2조건문에 false가 나올때까지 반복됨.
*/
//1. 우유 구매를 10번 출력
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
            //vs 10번 출력 [가능하지만 힘듦]
for ( let i = 1 ; i<=10 ; i++){console.log('for)우유 구매')}
//-let i 는 1부터 10까지 1씩 증가 반복하면서 console.log를 출력함 [총10회]

//p.178 예제1
for(let i = 0 ; i <5 ; i++){ //f start
//-let i 는 0부터 5미만까지 1씩 증가하면서 console.log를 반복실행. [0 1 2 3 4 총 5회]
    console.log(`${i}번째 반복입니다.`)
}//f end

//p.179 예제2 누적합계
let output = 0;
//console.log('for start') 확인용
for(let i = 1; i <=100 ; i++){//for start
// - let i 는 1부터 100까지 1씩 증가하면서 output에 i를 더하는 반복문 실행
    output += i // = output = output+1
    //output에 i 를 더하고 output에 저장
    // console.log(`${i}회 output : ${output}`); 확인용
}//for end
//console.log('for end')확인용

console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`)

//p.180 예제3 for문과 배열(인덱스 0부터 1씩 증각하는 패턴, 배열 내 인덱스 순회/확인)의 관계
    // - 0부터 마지막인덱스( <= 배열.length-1 또는 < 배열.length )까지

const todos = ['우유구매', '업무 메일 확인', '필라테스 수업']
    //인덱스 : 0 1 2 //길이 : 3
for(let i = 0 ; i < todos.length ; i++){//for start
// - let i는 0부터 todos배열의 마지막 인덱스까지 1씩 증가 하면서 console.log 반복 실행
    console.log(`${i}번째 할 일 : ${todos[i]}`);
    //i는 반복변수 : 현재 반복되고 있는 변수의 상태 저장
    //인덱스 대신 i를 활용
}//for end

//p.180 역순
for(let i = todos.length -1 ; i>=0;i--){
// - let i 는 마지막 인덱스 부터 0부터 1씩 감소하면서 console.log 반복 실행
    console.log(`${i}번째 할 일 : ${todos[i]}`);
}

let outPrint=''; //공백이 저장된 변수
// 예) 1부터 10이하까지 1씩 증가 반복[한줄표시]
for(let i = 1 ; i <=10 ; i++){
    outPrint +=`${i}  `;
}
console.log(outPrint);

// 예2) 1부터 10이하까지 1씩 증가하면서 1씩 증가 반복
outPrint=''; //위에서 사용한 변수 공백 초기화
for(let i=1 ; i<=10 ; i++){
    outPrint += `<li>${i}</li>`;
}
//[HTML출력]
document.querySelector('ul').innerHTML = outPrint;

// 예3) 1부터 10이하까지 1씩 증가 반복 [누적합계]
let sum = 0; //반복전에는 누적합이 0
for(let i =1 ; i <= 10 ; i++){
    sum += i //i를 sum에 더한후 sum에 대입
}

/*
    예3 반복문 순서도
        초기값 :    i = 1      ,  sum = 0
        
        for 시작
            i               조건[i<=10]         실행문[sum += i]        sum누계     증감식[i++]
            i = 1           true                0+1 => 1                sum=1       i = 2
            i = 2           true                1+2 => 3                sum=3       i = 3
            i = 3           true                3+3 => 6                sum=6       i = 4
            i = 4           true                6+4 =>10                sum=10      i = 5
            i = 5           true                10+5=>15                sum=15      i = 6
            i = 6           true                15+6=>21                sum=21      i = 7
            i = 7           true                21+7=>28                sum=28      i = 8
            i = 8           true                28+8=>36                sum=36      i = 9
            i = 9           true                36+9=>45                sum=45      i = 10
            i = 10          true                45+10=>55               sum=55      i = 11
            i = 11          false
 */

// 예4) 1부터 100까지 7배수 누계합계
    // 1. i는 1부터 100까지 7씩 증가
sum = 0;
for(let i = 0 ; i <= 100 ; i+=7){
    sum += i;
}
console.log(`1부터 100까지 7배수의 합: ${sum}`);
    // 2. i는 1부터 100까지 7배수 i%7 == 0
sum=0;
for(let i = 0 ; i <= 100 ; i++){
    if(i%7==0){sum+=i;} //만약에 i가 나누기 7을 했을때 나머지가 0이면 i는 7배수.
}
console.log(`1부터 100까지 7배수의 합: ${sum}`);

// for 중첩
for(let 부모 = 1 ; 부모 <= 5 ; 부모++){
    //부모는 1부터 5이하까지 1씩 증가 반복      [총 5회전]
    console.log(`=====부모 : ${부모}=====`)
    for(let 자식 = 1 ; 자식 <=3 ; 자식++){
        //자식은 1부터 3이하까지 1씩증가 반복   [총 3회전*상위for => 15회전 ]
        console.log(`${부모}의 ${자식}`)
    }//for2 end
}//for end

// 예5)구구단
    //1. 2단
const 단 = 2;
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    // 곱은 1부터 9까지 1씩 증가 반복
    console.log(`${단} X ${곱} = ${단*곱}`)
}

    //2. 2단
        //1. 단 만들기 : 단 2~9
for(let dan = 2 ; dan <= 9 ; dan++){console.log(`단:${dan}`)}
        //2. 곱 만들기 : 곱 1~9
for(let gob = 1 ; gob <=9 ; gob++){console.log(`곱:${gob}`)}
        //3. 단 과 곱 합치기 [ 단 안에 곱이 들어간다. 단 for 사위, 곱 for 하위]
for(let dan = 2 ; dan <= 9 ; dan++){
    for(let gob = 1 ; gob <= 9 ; gob++){
        console.log(`${dan} X ${gob} = ${dan*gob}`)
    }
}