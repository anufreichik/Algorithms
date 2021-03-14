document.getElementById('myBtn').addEventListener('click', debounce(()=>getData('Marina'), 2000));

document.getElementById('txtSearch').addEventListener('keyup', debounceSearch(()=>getInputData(), 1000));


//function debounce  - HOF that takes two arguments function to call and delay and return anonymous function
function getData(text) {
    console.log('test is: ' + text);
}

function getInputData(){
    console.log('inside getData')
    let val = document.getElementById('txtSearch').value;
    console.log(val)
}

function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        // console.log(...args)
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}


function debounceSearch(fn, delay){
    let timer=null;
    console.log('im inside debounceSearch');//only runs on load
    return (...args)=>{
        console.log('about to clear timeout');
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },delay);
    }
}
