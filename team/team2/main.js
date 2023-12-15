console.log('js 열림')
const 제품명=[];
const 가격=[];
const 수량=[];

function 등록(){
    //1.입력
    const itemName = document.querySelector('#itemName').value;     
    const itemPrice = document.querySelector('#itemPrice').value;
    const itemCnt = document.querySelector('#itemCnt').value;

    if( itemName.length <= 0 || itemPrice.length <= 0 || itemCnt.length <= 0){alert('입력해주세요'); return;}
    if( 제품명.indexOf(itemName) >= 0){alert('등록된 제품입니다.'); return;} 
    if(isNaN(itemPrice) == true){alert('가격에 숫자를 입력해주세요.'); return;}
    if(isNaN(itemCnt) == true){alert('수량에 숫자를 입력해주세요.'); return;}
                
    //2.처리
    제품명.push(itemName); 
    가격.push(itemPrice);
    수량.push(itemCnt);
    console.log(제품명)
    console.log(가격)
    console.log(수량)
  
    //3.출력
    document.querySelector('#itemName').value ='';
    document.querySelector('#itemPrice').value =''; 
    document.querySelector('#itemCnt').value ='';

    출력();
}