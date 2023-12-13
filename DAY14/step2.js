let output='';

//문제10-2
function 문제10(){
    const line = Number(document.querySelector('#line10').value)
    let html = ``;
    //[행]
    for(let r = 1 ; r<=line ; r++){

        //행 시작
        html+=`<tr>`;

        //[열]
        for(let c = 1 ; c <= line; c++){
            if(c == r){html += `<td>★</td>`}
            else if (c+r == line+1){html += `<td>★</td>`}
            else{html += `<td>☆</td>`}

        }

        //행 끝
        html+=`</tr>`;
    }
    const tableObj =document.querySelector('table');
    tableObj.innerHTML = html;

    console.log(tableObj);
}

//문제9-2
function 문제9(){
    const line1 = Number(document.querySelector('#line9').value)
    let html1 = ``;
    for(let r =1 ; r <= line1/2 ; r ++){//행
        html1+=`<tr>`;
        for(let c =1 ; c <= line1 ; c++){
        if(c+r >=6 || c+r == line1*2 ){html1 += `<td>★</td>`}
        else{html1 += `<td>☆</td>`}
        }html1+=`</tr>`

    }
    const tableObj1 =document.querySelector('#table9');
    tableObj1.innerHTML = html1;

    console.log(tableObj1);

}

/*
// 문제1) 입력받은 수 만큼 * 출력
const value1 = Number(prompt('문제1 수 입력'));
for(let i = 1 ; i <= value1 ; i++){
    //i는 1부터 입력받은 수까지 1씩 증가
    output +='*';
}
console.log(output);
*/

/*
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
output='';
const value2 = Number(prompt('문제2 수 입력'));
for(let i =1 ; i <= value2 ; i++){
    output+='*';
    //만약에 i가 3배수 이면 줄바꿈 처리
    if(i%3 == 0){output += '\n';} // \n:제어(이스케이프)문자
}
console.log(output)
*/

/*
 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*
**         
***      
****   
*****


output='';
const line3 = Number(prompt('문제3 줄 수 입력'));
for(let i =1 ; i<=line3 ; i++){//for1 s  
    //별찍기 [열]
    for(let s = 1 ; s <= i ; s++){
        //s는 1부터 입력받은 줄 수 만큼 1씩 증가
        output+='*'; 
    }
    
    //줄바꿈
    output+= '\n'
} //f1 e
console.log(output)
*/

/*
문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
*****
****
***
**
*

output='';
const line4 = Number(prompt('문제4 줄 수 입력'));
for(let i = 1 ; i <= line4 ; i++){//행출력
    //별찍기
    for(let s = 1 ; s<=line4-i+1 ; s++){output+=`*`} //열출력

    //줄바꿈
    output+=`\n`
}
console.log(output);
*/

/*
문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   **
  ***
 ****
*****

output='';
const line5 = Number(prompt('문제5 줄 수 입력'));
for(let i = 1 ; i <= line5 ; i++){//행
    //공백
    for(let b = 1 ; b <=line5-i ; b++){output+=` `}
    //별
    for(let s = 1 ; s<=i ;s++){output+=`*`}
    //줄바꿈 = 행바꿈
    output+=`\n`
}   
console.log(output);
*/


/*
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*****
 ****
  ***
   **
    *


output='';
const line6 = Number(prompt('문제6 줄 수 입력'));
for(let i =1 ; i <= line6 ; i++){//행
    
    //공백
    for(let b = 1 ; b <= i -1 ; b++){output+=` `;}
    //별
    for(let s = 1 ; s<=line6-i+1 ; s++){output+=`*`;}

    output+=`\n`;
}
console.log(output)
*/

/*
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   ***
  *****
 *******
*********

output='';
const line7 = Number(prompt('문제7 줄 수 입력'));
for(let i = 1 ; i <= line7 ; i++){//행
    //공백
    for(let b = 1 ; b<= line7-i ; b++){output+=` `}
    //별
    for(let s = 1 ; s<= i*2-1 ; s++){output+=`*`}
    output+=`\n`
}
console.log(output)
*/

/*
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*********
 *******
  *****
   ***
    *

output='';
const line8 = Number(prompt('문제8 줄 수 입력'));
for(let i = line8 ; i>=1 ; i--){//행
    //공백
    for(let b = 1 ; b<= line8-i ; b++){output+=` `}
    //별
    for(let s = 1 ; s <= i*2-1 ; s++){output+=`*`}
    
    output+=`\n`
}
console.log(output)

output='';
for(let i = 1 ; i<= line8 ; i++){
    for(let b = 1 ; b <= i-1 ; b++){output+=` `}
    for(let s = 1 ; s <= (line8*2)-(i*2-1) ; s++){output+=`*`}
    output+=`\n`
}
console.log(output)
*/

/*
// 문제9) 입력받은 줄(짝수만) 수 만큼 * 출력  [ ex) 10 ]
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

output='';
const line9 = Number(prompt('문제9 줄 수 입력'));
for(let i = 1 ; i <= line9/2 ; i++){//행
    //공백
    for(let b = 1 ; b<= line9/2-i ; b++){output+=` `}
    //별
    for(let s = 1 ; s <= i*2-1 ; s++){output+=`*`}

    output+=`\n`
}
for(let i =1  ; i<=line9/2 ; i++){//행
    for(let b = 1 ; b <= i-1 ; b++){output+=` `}
    for(let s = 1 ; s <= line9-(i*2-1) ; s++){output+=`*`}
    output+=`\n`
}
console.log(output)

*/
/*
// 문제10) 입력받은 줄(홀수만) 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *

output='';
const line10 = Number(prompt('문제10 줄 수 입력'));

for(let r = 1 ; r<=line10; r++){
    for(let c = 1 ; c <= line10 ; c++){
        //[조건1 = 행과 열이 같으면 별]
        if(r==c){output+=`*`;}
        //[조건2 = 행과 열이 더한 값이 입력받은값+1]
        else if(r+c == line10+1){output+=`*`;}
        //아니면 공백
        else{output += ` `;}
    } output+=`\n`
}
console.log(output)
*/

