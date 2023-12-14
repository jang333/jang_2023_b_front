console.log('ja 열림');

const 날짜 = [ ];
const 항목 = [ ];
const 금액 = [ ];

function 등록함수(){ console.log('등록한다')
    //1.입력
    const date = document.querySelector('#date').value;     console.log(date)
    const name = document.querySelector('#name').value;     console.log(name)
    const price = document.querySelector('#price').value;   console.log(price)

    //2.처리
    날짜.push(date)
    항목.push(name)
    금액.push(price)
    console.log(금액)

    //3.출력
    document.querySelector('#date').value ='';     
    document.querySelector('#name').value = '';    
    document.querySelector('#price').value = '';

    출력함수();
    총합함수();

}

function 삭제함수(삭제할인덱스){ 
    console.log('삭제함수실행()' + 삭제할인덱스)

    날짜.splice(삭제할인덱스,1);
    항목.splice(삭제할인덱스,1);
    금액.splice(삭제할인덱스,1);

    출력함수();
    총합함수();
}


function 출력함수(){
    const content = document.querySelector('#content');
    let html1 = '';
    for( let i = 0; i< 날짜.length || i<항목.length || i<금액.length ; i++){
        html1+=`<div id="contentList">
                <div>${날짜[i]}</div>
                <div>${항목[i]}</div>
                <div>${금액[i]}</div>
                <div><input onclick="삭제함수(${i})" type="button" value="삭제"/></div>
                </div>`
    }

    content.innerHTML=html1;
}

function 총합함수(){
    const all = document.querySelector('#all');
    let html2 =0;
    for(let i=0; i<금액.length; i++){
        html2+= Number(금액[i])    }

    all.innerHTML=html2;
    
}

