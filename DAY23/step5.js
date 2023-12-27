
document.addEventListener('DOMContentLoaded', function(){
    //1. 문서 객체 호출
    const input = document.querySelector('#todo');
    const todoList = document.querySelector('#todo-list');
    const addButton = document.querySelector('#add-button');

    //2. 변수 선언
    let keyCount = 0

    //3. 함수 선언
    const addTodo = () => {
        //입력 약식에 내용이 없으면 추가하지 않습니다.
        if(input.value.trim() === ''){
            alert('할 일을 입력해주세요.')
            return
        }

        //문서 객체를 설정
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');
        const button = document.createElement('button');
        

        //문서 객체를 식별할 키 생성
        const key = keyCount
        keyCount += 1
        console.log(key)

        //item 객체를 조작하고 추가
        item.setAttribute('data-key',key);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);
        console.log(key);

        //checkbox 객체를 조작
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',function(event){
            console.log(event)
            item.style.textDecoration
            =event.target.checked ? 'line-through' : ''
        })

        //text 객체 조작
        text.textContent = input.value
        
        //button 객체 조작
        button.textContent = '제거하기'
        button.addEventListener('click',function(){
            removeTodo(key)
        })

        //입력 양식의 내용을 비웁니다.
        input.value=''
    }//e end
    
    const removeTodo = (key) => {
        //식별 키로 문서 객체를 제거
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item);
    }//e end
    
    //이벤트 연결
    //버튼을 눌렀을때 addTodo 함수 호출
    addButton.addEventListener('click',addTodo)
    
    input.addEventListener('keyup',function(event){
        //입력 양식에서 Enter를 누르면 바로 addTodo() 함수를 호출
        const ENTER = 13
        if(event.keyCode === ENTER){
            addTodo();
        }

    }); //e end

});//e end