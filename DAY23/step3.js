
//1.기존에 있는 재료를 select에 넣을때.
const category = ['떡볶이','순대','오뎅','튀김']

document.addEventListener('DOMContentLoaded',function(){

    //2.어디에 무엇을 출력
    const selectBox = document.querySelector('#selectBox');
    let html = '';
        for(let i =0 ; i<category.length ; i++){
            html +=`<option>${category[i]}</option>`
        }
    selectBox.innerHTML=html;
        //.textContent : 문자열 그자체  //.innerHTML : 문자열 HTML 형식

    //[p.343]
    //1.각 요소 객체로 ㅇ호출
    const select = document.querySelector('select')
    const p = document.querySelector('p');

    //2.요소의 이벤트
    select.addEventListener('change',function(event){
        console.log(event); //change이벤트 결과 정보 객체
        console.log(event.currentTarget); //change 이벤트를 발생시킨 요소
        console.log(event.currentTarget.options); //select 하위 요소들/배열 변환

        /*
        [방법1]
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;        
        p.textContent = `선택 : ${options[index].textContent}`
        */

        //[방법2]
        console.log(select.value);
        p.textContent = `선택 : ${select.value}`;
    })

    //[p.345]
    let 현재값;
    let 변환상수;
    // 1. 각 요소의 객체 호출 
    const select3 = document.querySelector('select:nth-child(7)');  //select중에서 3번째
        console.log(select3);
    const input = document.querySelector('input');
    const span = document.querySelector('span');
    // 2. 계산함수 [실행조건 : 1. select3 값 변경되었을때 , 2.input값을 입력[keyup] 했을때]
    const calculate = function(){
        span.textContent = (현재값*변환상수).toFixed(2); //toFixed() : 소수점 자르기 함수 [반올림]
    }    
    // 3. select3의 값을 change 했을때
    select3.addEventListener('change',function(event){
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        변환상수 = Number(options[index].value);
        //변환상수 = Number(select3.value);

        calculate(); //계산 및 출력 함수 실행

    })
    // 4. input의 값을 keyup 했을 때
    input.addEventListener('keyup',function(event){
        현재값=Number(event.currentTarget.value);
        //현재값=Number(input.value);

        calculate(); //계산 및 출력 함수 실행
    })
});

