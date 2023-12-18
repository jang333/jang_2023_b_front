const 제품 = [];

let 매출 = 0;
const 구매목록=[];


function 등록(){
    //1.입력
    const itemName = document.querySelector('#itemName').value;     
    const itemPrice = document.querySelector('#itemPrice').value;
    const itemCnt = document.querySelector('#itemCnt').value;
    const itemImg = document.querySelector('#itemImg');

    

    if( itemName.length <= 0 || itemPrice.length <= 0 || itemCnt.length <= 0){alert('입력해주세요'); return;}
    //if( 제품.indexOf(itemName) >= 0){alert('등록된 제품입니다.'); return;} 
    if(isNaN(itemPrice) == true){alert('가격에 숫자를 입력해주세요.'); return;}
    if(isNaN(itemCnt) == true){alert('수량에 숫자를 입력해주세요.'); return;}
                
    //2.처리
   

    const imageSrc = URL.createObjectURL(itemImg.files[0]);
    //제품.push(imageSrc);
    
    const list = {이미지 : imageSrc, 제품명 : itemName, 가격 : itemPrice, 수량 : itemCnt}
    제품.push(list)
    
    console.log(제품)

    //3.출력
    document.querySelector(`#itemImg`).value="";
    document.querySelector('#itemName').value ='';
    document.querySelector('#itemPrice').value =''; 
    document.querySelector('#itemCnt').value ='';

    출력();
}
function 출력(){
    let html = "";
    let tableDiv = document.querySelector('table tbody');
    for(let i = 0; i<제품.length; i++){
        html += `
        <tr class='${제품[i].수량 > 0 ? '': "soldOut"}'>
            <td><img src="${제품[i].이미지}" style="width:100px" /></td>
            <td>${제품[i].제품명}</td>
            <td>${제품[i].가격}원</td>
            <td>${제품[i].수량 > 0 ? 제품[i].수량: "품절"}</td>
            <td class=btn>
                <input onclick="구매(${i})" type="button" value="구매">
                <input onclick="수정(${i})" type="button" value="수정">
            </td>  
        </tr>
        <tr class="retouch open${i}">
            <td>
                <input class="name${i}" type="text" placeholder="수정할 제품명">
            </td>
            <td>
                <input class="price${i}" type="text" placeholder="수정할 가격">
            </td>
            <td>
                <input class="siu${i}" type="text" placeholder="수정할 수량">
            </td>
            <td>
                <input onclick="확인(${i})" type="button" value="확인">
            </td>
        </tr>
        `

    }

    tableDiv.innerHTML = html;

   
}

function rework(n){ //쉼표넣기
    let a = String(n);
    for ( let i = a.length-3; i>0; i -=3){ //뒤에서 세번째 자리수부터, 3자리주기이니 3자리마다 반복
        a =a.substring(0,i)+","+a.substring(i); //0~i번째 문자열+','+i~끝문자열
    }
    return a;
}

function 총매출( i ){
    매출 += Number(제품[i].가격);
}


function 수정(i){
    let retouch = document.querySelector(`.open${i}`);

    retouch.style.display = "table-row";

}
//확인 함수
function 확인(i){
    let retouch = document.querySelector(`.open${i}`);
    let a =document.querySelector(`.name${i}`).value;
    let b = document.querySelector(`.price${i}`).value;
    let c =document.querySelector(`.siu${i}`).value;
    if(a && b&& c){
        제품[i].제품명 = document.querySelector(`.name${i}`).value;
        제품[i].가격 = document.querySelector(`.price${i}`).value;
        제품[i].수량 = document.querySelector(`.siu${i}`).value;
    }
    else{
        alert("값을 입력해 주세요")
    }
    retouch.style.display = "none";

    출력();
}

function 구매내역출력(){
    let html2 = "";
    let table2 = document.querySelector('#table2 tbody');
    for(let i = 0; i<구매목록.length; i++){
        html2 += `
                <tr>
                    <td>${구매목록[i].구매날짜}</td>
                    <td>${구매목록[i].구매제품명}</td>
                    <td>${구매목록[i].구매가격}원</td>
                </tr>
                `
    }
    
    table2.innerHTML = html2;

    출력()
    let sumDiv = document.querySelector('#sum');
    let testy2 = 0
    for(let i = 0; i<구매목록.length; i++){
        testy2 += Number(구매목록[i].구매가격)
    }
    console.log(`${testy2}`);
    sumDiv.innerHTML = `총 매출 : ${rework(testy2)}원`;

}

function 정렬(){
    let tmp = '';
    for(let j=0; j<구매목록.length-1; j++){
        for(let i=0; i<구매목록.length-1; i++){
            if(구매목록[i].구매날짜<구매목록[i+1].구매날짜){
                // 날짜 정렬
                tmp = 구매목록[i].구매날짜;
                구매목록[i].구매날짜 = 구구매목록[i+1].구매날짜;
                구매목록[i+1].구매날짜 = tmp;

                // 제품명 정렬
                tmp = 구매목록[i].구매제품명;
                구매목록[i].구매제품명 = 구매목록[i+1].구매제품명;
                구매목록[i+1].구매제품명 = tmp;

                // 가격 정렬
                tmp = 구매목록[i].구매가격;
                구매목록[i].구매가격 = 구매목록[i+1].구매가격;
                구매목록[i+1].구매가격 = tmp;
            }
        }
    }
}

function 구매(i){
    
    

    const date =prompt('날짜를 입력해주세요 ex)yyyy-mm-dd')
        if(date[4] == "-" && date[7] =="-" && date.length == 10){
                        
            제품[i].수량 -= 1;

            const 구매list={구매날짜: date, 구매제품명: 제품[i].제품명, 구매가격: 제품[i].가격}
            구매목록.push(구매list)

            //구매날짜.push(date); console.log(구매날짜);
            //구매제품명.push(제품명[i]); console.log(구매제품명);
            //구매가격.push(가격[i]); console.log(구매가격);
        }
        else{
            alert("날짜형식이 다릅니다");
        }

    
    //출력
    console.log(`구매 ${제품[i].수량}`);
    정렬();
    구매내역출력();
    

}