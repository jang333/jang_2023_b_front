
//0.지역변수[배열]
    //-속성[상태]마다 배열을 하나씩 만들면 너무 많아짐 = 관리 힘듦.
    /*
    const writerArray=[];
    const passwordArray=[];
    const titleArray=[];
    const contentArray=[];
    */
    //여러속성들을 하나의 배열에서 관리할때
        //1.borderArray = [ ]
            //하나의 서로다른 유형의 4가지의 데이터를 저장하면 인덱스 관리가 힘듦
        //2.borderArray = [ '작성자 / 비밀번호 / 제목 / 내용', '작성자 / 비밀번호 / 제목 / 내용']
            //-여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함[구분 문자는 개발자 마음]
            //-입력 데이터에는 구분 문자가 포함되면 안된다.
            //-단점 : 분해 하고 분해 후 순서를 기억해야 함.

const borderArray=[] //상수 값을 받는다.

//1.[C]글쓰기   [글쓰기 버튼을 클릭했을때.]
function 글쓰기(){ //매개변수:x / 리턴값:x
    //1.HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    //2.배열에 저장하기
    const border = `${writer}/${password}/${title}/${content}`;
    borderArray.push(border);   console.log(borderArray);
    
    //3.배열을 HTML에 출력하기
    모든글출력();

    document.querySelector('#writer').value =''
    document.querySelector('#password').value=''
    document.querySelector('#title').value=''
    document.querySelector('#content').value=''
    
    return;
}
//2-1.[R]모든글출력 [1. JS가 열렸을때 2.글쓰기/글수정/글삭제 처리 할때마다 새로고침]
function 모든글출력(){//매개변수:x / 리턴값:x
    
    const tableBody = document.querySelector('table>tbody');
    let html=``;
    for(let i = 0 ; i < borderArray.length ; i++){
        console.log(borderArray[i]);
        // 저장할때 4가지 숙성/상태 값들을 "/" 기준으로 하나로 묶었으니까 다시 "/"기준으로 분리
        console.log(borderArray[i].split("/"));
        html+=`<tr onclick="개별글출력(${i})">                    
                    <th>${i}</th> 
                    <th>${borderArray[i].split("/")[2]}</th>
                    <th>${borderArray[i].split("/")[0]}</th>
                </tr>`
    }
    tableBody.innerHTML=html;

    return;
}
//2-2[R]개별글출력 [해당 글을 선택했을때]
function 개별글출력(index){//매개변수:(대상) 보고자하는 식별번호 / 리턴값:x
    console.log(index);

    const boardBox = document.querySelector('#boardBox');
    // - replaceAll( '교체할문자열" , "새로운문자열" ) : 특정 문자열 치환 함수.
    // - \n을 <br/> 변경 : <textarea> 에서 줄바꿈처리하면 \n으로 저장되고 HTML 출력할때 \n 대신에 <br/> 치환
    
    console.log(borderArray[index].split("/")[3].replaceAll('\n','<br/>'));

    let html = `<div> 작성자 : ${borderArray[index].split("/")[0]}</div>
                <div> 제목 : ${borderArray[index].split("/")[2]}</div>
                <div> 내용 : ${borderArray[index].split("/")[3].replaceAll('\n','<br/>')}</div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>`;

                boardBox.innerHTML=html;


    return;
}
//3.[U]글수정 [글수정 버튼을 클릭했을때]
function 글수정(index){//매개변수:(대상) 수정할 식별번호 / 리턴값:x

    const checkPw = prompt('비밀번호');
    // 1. 검증[유효성검사] - 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
    if(checkPw == borderArray[index].split('/')[1]){
        //수정할 값들을 입력받아.
        const updateTitle=prompt('수정할 제목')
        const updateContent=prompt('수정할 내용')
        //수정처리[기존데이터와 새로운데이터 다시 합쳐서 수정]
        borderArray[index]=`${borderArray[index].split('/')[0]}/${borderArray[index].split('/')[1]}/${updateTitle}/${updateContent}`;
        alert('수정성공');
        //새로고침
        모든글출력();
        개별글출력(index);

    }else{alert('패스워드가 다릅니다. 수정불가')}
    return;
}
//4.[D]글삭제 [글삭제 버튼을 클릭했을때]
function 글삭제(index){//매개변수:(대상) 수정할 식별번호 / 리턴값:x
    console.log(index);
    const checkPw=prompt('비밀번호')
    if(checkPw == borderArray[index].split('/')[1]){
        // 삭제처리
        borderArray.splice(index,1);
        alert('삭제성공');
        //새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML='';
    }else{alert('패스워드가 다릅니다. 삭제불가')}
    return;
}

/*
    함수 만들때 고민할점.
        1. 언제실행하는 함수인지
        2. 함수 안으로 넣을 매개변수
        3. 함수 밖으로 반환할 값
        4. 무엇을 실행 하는지
*/