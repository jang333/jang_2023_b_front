
//HTML를 모두 읽었을때. 해당 함수 실행
document.addEventListener('DOMContentLoaded', function(){
    //2.h1요소를 객체로 가져오기
    const header = document.querySelector('h1');
        //document.querySelector('h1');             : 해당 요소를 객체로 호출
        //document.querySelector('h1').value;       : 해당 요소의 입력된 값 호출
            //[*단 value 입력관련 요소만 가능]  : input. select, textarea 등 / div, h1, span [x]
        //document.querySelector('h1').innerHTML;   : 해당 요소 사이의 HTML를 텍스트 호출[HTML에 코드 자체를 읽어옴]

    header.textContent = 'HEADERS';             //DOM객체명.textContent : 텍스트 호출 [HTML에 렌더링 결과물을 읽어옴]      
    header.style.color = 'white';               //객체명.style.css속성명 = '값';
    header.style.backgroundColor = 'black';
    header.style.padding = '10px';
        //css : background-color    vs js : backgroundColor : 카멜표기법

    //3.[p.313]
    //document.querySelectorAll()를 이용한 h1 dom 객체를 여러개 / 배열로 변환.
    const headers = document.querySelectorAll('h1'); console.log(headers);
    //
    for(let i = 0 ; i<headers.length ; i++){
        //i는 0부터 배열의 길이만큼 1씩 증가 반복

        //[조건]
        if(i%2 == 0){headers[i].style.color = 'white';}
        else{headers[i].style.color = 'red';}
        
        headers[i].textContent = i%3 == 0 ? '3배수O' : '3배수X';
        headers[i].style.backgroundColor = 'black';
        headers[i].style.padding = '10px';
    }//f end

    //4.[p.314]
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    a.textContent = '<h1>textContent 속성</h1>'
    b.innerHTML = '<h1>innerHTML 속성</h1>';
})