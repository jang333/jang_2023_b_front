const boardArray=[]
//1.[C]글쓰기   [글쓰기 버튼을 클릭했을때.]
function 글쓰기(){ //매개변수:x / 리턴값:x
    //1.HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
            
    //2.배열에 저장하기 //**객체로 하나로 만들기
    const board = { 작성자 : writer, 비밀번호 : password, 제목 : title, 내용 : content};
    board.조회수=0; //객체내 없는 key를 호출 시 key 생성 //이제 등록했으니까 0부터 시작
    boardArray.push(board);
    console.log(boardArray)
                
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
    for(let i = 0 ; i < boardArray.length ; i++){
 
        html+=`<tr onclick="개별글출력(${i})">                    
                <th>${i}</th> 
                <th>${boardArray[i].제목}</th>
                <th>${boardArray[i].작성자}</th>
                <th>${boardArray[i].조회수}</th>
            </tr>`
    }
    tableBody.innerHTML=html;
            
    return;
}
//2-2[R]개별글출력 [해당 글을 선택했을때]
function 개별글출력(index){//매개변수:(대상) 보고자하는 식별번호 / 리턴값:x
    boardArray[index].조회수+=1; 모든글출력();
    
    // - replaceAll( '교체할문자열" , "새로운문자열" ) : 특정 문자열 치환 함수.
    // - \n을 <br/> 변경 : <textarea> 에서 줄바꿈처리하면 \n으로 저장되고 HTML 출력할때 \n 대신에 <br/> 치환
                
            
    let html = `<div> 작성자 : ${boardArray[index].작성자} 조회수: ${boardArray[index].조회수}</div>
                <div> 제목 : ${boardArray[index].제목}</div>
                <div> 내용 : ${boardArray[index].내용.replaceAll('\n','<br/>')}</div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>`;

    boardBox.innerHTML=html;
            
    return;
}

//3.[U]글수정 [글수정 버튼을 클릭했을때]
function 글수정(index){//매개변수:(대상) 수정할 식별번호 / 리턴값:x
            
    const checkPw = prompt('비밀번호');
    // 1. 검증[유효성검사] - 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
    if(checkPw == boardArray[index].비밀번호){
        //수정할 값들을 입력받아.
        const updateTitle=prompt('수정할 제목')
        const updateContent=prompt('수정할 내용')
        //수정처리                    
        boardArray[index].제목=updateTitle;
        boardArray[index].내용=updateContent;

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
    if(checkPw == boardArray[index].비밀번호){
        // 삭제처리
        boardArray.splice(index,1);
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