console.log('js열림'); //첫줄오류는 .js 실행 x -> 파일경로 문제

const 회원배열 = [ ]; // 여러 회원이름을 저장하는 배열 / 회원이 없는 상태.
    //-배열을 위에 선언/생성한 이유
        //1. 선언은 1번만 되어야 한다.[선언이 계속되면 초기화 돼서 누적이 불가능.]
        //2. 여러 { } 에서 호출/사용 해야 하므로 전역 사용  { }
            //1.function 회원등록(){}   2.function 회원삭제(){}
/*
    -지역변수 특징
    { } 안에서 선언된 변수/상수는 { }밖으로 나올 수 없다.
    { } 안에서 선언된 변수/상수는 하위{ }안으로 들어갈 수 있다.

    ========================= js 구역 [대한민국 = 전체구역]========================
    let 변수 = 30;

        ===================== 함수{}구역[경기도 구역] ====================
    function 함수(){
        let 변수2 = 40;
        console.log(변수1); //대한민국 사람이면 경기도에 들어갈 수 있다.
        if(조건){===================== 함수{}구역[안산 구역] ====================
            console.log(변수1); //대한민국 사람이면 안산에 들어갈 수 있다.
            console.log(변수3); //x
            let 변수4 = 60;
        }
        console.log(변수4); //x
    }

        ===================== 제어문{}구역[강원도구역] ====================
    if(조건){
        let 변수3 = 50;
        console.log(변수1); //대한민국 사람이면 강원도에 들어갈 수 있다.
        console.log(변수2); //다른 구역에서 태어난[선언]된 변수는 들어올 수 없다.
    }
    ========================= js 구역 ========================
*/

function 회원등록(){ //f start //선언
    console.log('회원등록함수 실행');

    //1.[입력]
    const name = document.querySelector('#nameInput').value;
        //document.querySelector('#nameInput')
            //<input id="nameInput" value="" type="text">
        //document.querySelector('#nameInput').value
        console.log(name);    


    //2.[처리] 등록처리 -> 배열에 추가

        //[부가기능] 입력받은 이름이 배열에 존재하면[중복발생]
        //중복이면 alert로 중복이라고 해주고, 배열에 push 하지 말기.
    
        if(회원배열.indexOf(name) >= 0){//존재하면 인덱스번호 반환 / 없으면 -1
            alert('현재 등록된 이름입니다.[중복]')
        }else{

            //[부가기능2] 회원명은 3글장리 경우에만 가능
            //입력값에 글자수가 3이 아니면 입력불가 해주고, 배열에 push하지 말기
            if(name.length != 3 ){
                alert('회원명 3글자로 입력해주세요')
            }else{
                //[부가기능] 입력받은 이름에 숫자가 포함되어 있으면
                //입력값에 alert로 숫자는 입력불가, 배열에 push 하지 말기.
                    //isNaN() 문자인지 숫자인지 판단[NaN : not a Number]
                        //isNaN() : 숫자이면 false 문자이면 true  
                console.log(isNaN(name[0]));
                console.log(isNaN(name[1]));
                console.log(isNaN(name[2]));

                if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){
                    alert('숫자를 입력할 수 없습니다.')
                }else{
                회원배열.push(name);
                console.log(회원배열);
            
            //3.[출력]
                document.querySelector('#nameList').innerHTML = 회원배열;
            //4.[부가기능]
                //1.등록후 input상자 초기화[input에 value에 빈문자열 넣어주기]
            document.querySelector('#nameInput').value='';
                }   
            }
        }

    /*  
        1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
        const name = document.querySelector('#nameInput').value;  

        함수 이용한 식
        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    
        회원배열.push( name ); // 입력된 값을 배열에 추가 

        3. [출력]
        document.querySelector('#nameList').innerHTML = 회원배열;
        [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
        document.querySelector('#nameInput').value ='';
    */
} //f end
//변수 : let, 상수 : const, 함수 : function


function 회원삭제(){//f start
    console.log('회원삭제 함수');
    //1.[입력]

    const name = document.querySelector('#nameInput').value;
    //2.[처리] 삭제 처리 -> 배열에서 요소 제거
        
        //입력한 값이 존재하면 삭제, 없으면 없다고 출력
        const deleteIndex = 회원배열.indexOf(name);//삭제할 인덱스 위치
        if( deleteIndex >=0) { //.indexOf() : 존재하면 0이상의 인덱스위치 반환
            회원배열.splice(deleteIndex , 1); alert('삭제했습니다.')
        }else{//없으면 -1
            alert('존재하지 않습니다.');
        }

    //3.[출력->새로고침 (배열내 요소가 변경되었으니 화면도 다시 출력 = 재렌더링)]
    document.querySelector('#nameList').innerHTML = 회원배열;
}//f end
