/*
    제작순서
    1.HTML
        0.설계
        1.레이아웃
    설계
    1.경험
    2.기능 실행 순서
        [키오스크 = 사용자입장]
            -카테고리선택 -> 제품선택 -> 장바구니 담기 -> 결제
        [포스기 = 관리자입장]
            -결제 내역 (주문상태)
            -카테고리 추가/삭제 기능
            -제품 추가/삭제 기능
    3.기능에 필요한 메모리(저장-DB설계)설계
        카테고리 = [ 
        {cno : 1, cname : '신제품(NEW)'},
        {cno : 2, cname : '프리미엄'},
        {cno : 3, cname : '와퍼&주니어'},
        {cno : 3, cname : '치킨&슈림프버거'},
        {cno : 4, cname : '올데이킹&킹모닝'}
        ]
            -관리자가 해당 배열을 추가/삭제

    4. 배열 안에 있는 데이터를 식별할때 기준점.
        사람 = {이름 : '유재석', 나이 : '40세', 직업 : '강사'} -이름으로 식별시 동명이인 존재하면 문제점 발생.[중복이 절대로 없어야됨.]
        사람 = {주민번호 : '991222-1' 이름 : '유재석', 나이 : '40세', 직업 : '강사'} - 주민등록은 절대로 중복 x 

        -인덱스 vs 식별코드생성 vs 이름     !!!중복이 업어야 하고 고정값.
            '신제품(NEW)' -----> { cno : 1, cnname : '신제품(NEW)'}

*/

/* 백엔드로 데이터를 받았다고 치고 */

/*전역변수*/
/*1.카테고리*/
let categoryArray=[
    {cno : 1, cname : '신제품(NEW)'},   
    {cno : 2, cname : '프리미엄'},
    {cno : 3, cname : '와퍼&주니어'},
    {cno : 4, cname : '치킨&슈림프버거'},
    {cno : 5, cname : '올데이킹&킹모닝'}
]
/*2.제품목록 (제품이미지명은 사진파일명과 동일하게)*/
let productArray=[
    {pno : 1, pname : '큐브 스테이크 와퍼' , pprice : 10000 , pimg : '큐브스테이크와퍼', cno : 1},
    {pno : 2, pname : '스파이시 큐브 스테이크 와퍼' , pprice : 12000 , pimg : '스파이시큐브스테이크와퍼', cno : 4},
    {pno : 3, pname : '더블비프불고기버거' , pprice : 7000 , pimg : '더블비프불고기버거', cno : 5}
]
/*3.카트목록 */
let cartArray=[] 

// - [함수1] : 카테고리 출력하는 함수 (실행조건 : js 열렸을때, 카테고리 선택했을때)
printCategory(1); //함수실행
function printCategory(selectCno){ //함수선언
    console.log(categoryArray) 
    //1.어디에
    const categoryUl = document.querySelector('#header>ul');
    console.log(categoryUl) 
    //2.무엇을
    let html='';
        //2-1 카테고리배열에 존재하는 카텔고리객체들을 모두 li형식으로 변환해서
        for(let i= 0 ; i <categoryArray.length ; i++){
            html+=`<li onclick = "printCategory(${categoryArray[i].cno})"
            class="${categoryArray[i].cno==selectCno ? 'selectMenu' : ''} ">
            ${categoryArray[i].cname}</li>`
        }console.log(html);
        
    //3.카테고리출력
    categoryUl.innerHTML=html;
    //4.제품출력
    printProduct(selectCno); //카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    //제품출력시 모든제품 출력이 아니고, 선택된 카테고리 번호의 일치한 제품만 출력해야 되니까
     
}

// -[함수2] : 제품 출력하는 함수 (실행조건 : 카테고리출력 되었을때)
function printProduct(selectCno){//함수선언 //전체출력x //내가 선택한 카테고리[부]의 제품[자]만
    console.log(selectCno);

    //1.어디에
    const productBox = document.querySelector('#productBox')
    //2.무엇을
    let html='';
        //자식요소에서 내가 선택한 카테고리번호와 일치한 제품을 찾아서 div화
        for(let i = 0 ; i<productArray.length ; i++){
            //만약에 i번째 제품의 cno와 내가 선택한 
            if(productArray[i].cno == selectCno){
                html+=`<div onclick="setCart(${productArray[i].pno})" class="product">
                            <img src="img/${productArray[i].pimg}.png" />
                            <div class="pinfo">
                                <div class="pname">${productArray[i].pname}</div>
                                <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                            </div>
                        </div>`
            }
        } 
     
    //3.출력
    productBox.innerHTML=html;
   
}

// -[함수3] 제품선택시 장바구니에 담아주는 함수(실행조건 : 제품을 클릭했을때)
function setCart(selectPno){ 
    console.log(selectPno);

    //1.입력
    //2.처리
    //제품번호를 카트배열에 저장
    cartArray.push(selectPno);
    
    //3.출력
    printCart();

}

// -[함수4] 카트에서 x버튼을 클릭시 카트에서 삭제 (실행조건 : x버튼 클릭했을때.)
function cartDelete(deleteIndex){
    console.log(deleteIndex)
    //1.입력 ---> 매개변수로 선택된 삭제인덱스
    //2.처리 ---> 배열에 해당하는 인덱스 삭제
    cartArray.splice(deleteIndex,1);
    //3.출력 ---> 카트상태 새로고침
    printCart();
}

// -[함수5]
function printCart(){

    //1.어디에
    const cartBottom = document.querySelector('#cartBottom');
    //2.무엇을
    let html='';

    let totalPrice = 0; //카트 내 총 금액
    let cartCount = cartArray.length; //카트 내 pno개수
        //카트목록에 있는 모든 제품번호출력
        for(let i = 0 ; i < cartArray.length ; i++){
            //해당 i번째 제품 정보찾기
            console.log(cartArray[i]);
            for(let j = 0 ; j <productArray.length ; j++){
                console.log(productArray[j])
                if( cartArray[i] == productArray[j].pno){
                    html+=`<div class="citem">
                    <div>${productArray[j].pname}</div>
                    <div>${productArray[j].pprice.toLocaleString()}원</div>
                    <span onclick="cartDelete(${i})">X</span>
                </div>`
                    //총합계 누적
                    totalPrice += productArray[j].pprice; //j번째 제품가격을 총합계에 더하기
                }
            }
        }
        console.log(totalPrice)
    //3.출력
    cartBottom.innerHTML=html;
    //3.개수,총가격
    document.querySelector('#count').innerHTML=cartCount;
    document.querySelector('#total').innerHTML=totalPrice.toLocaleString()+'원';
}

function 등록(){
    
    const cname = document.querySelector('#cname').value;
    const cno = categoryArray.length+1
    console.log(cname);

    categoryArray.push({cno : cno, cname : cname });
    console.log(categoryArray)
   
    let html = '';
    
    for(let i = 0 ; i < categoryArray.length ; i++){
        html +=`<li>
        ${categoryArray[i].cname}</li>`
    }
    
    categoryArray.innerHTML=html;
    printCategory(1);
}