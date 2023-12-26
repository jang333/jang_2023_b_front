document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let isConnect = false;

    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const connectButton = document.querySelector('#connect');
    const disconnectButton = document.querySelector('#disconnect');

    const listener = function(evnet){
        console.log(evnet)
        h1.textContent = `클릭횟수 : ${counter++}`
        
    }

    connectButton.addEventListener('click', function(){
        if(isConnect === false){
            h1.addEventListener('click', listener)
            p.textContent = '이벤트 연결 상태 : 연결'
            isConnect = true
        }
    })

    disconnectButton.addEventListener('click', function(){
        if(isConnect === true){
            h1.removeEventListener('click', listener)
            p.textContent = '이벤트 연결 상태 : 해제'
            isConnect = false
        }
    })
});