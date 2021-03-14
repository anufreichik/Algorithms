function outer(){
    let counter=0;
    return function(){
        counter++;
    }
}

const outerResultFunc = outer();
outerResultFunc();//should increment counter
outerResultFunc();

function getURL(port){
    return function (address){
        return `http://${port}/${address}`;
    }
}

const getURLResult = getURL('google.com');
const googleMaps = getURLResult('maps');
const googleCalendar = getURLResult('calendar');


//--------------------result of this operation would be index:4 because i define with var and such way setTimeout taking surrounding i that would be=4 by the time this operation will run
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

// "Index: 4, element: undefined"
// "Index: 4, element: undefined"
// "Index: 4, element: undefined"
// "Index: 4, element: undefined"

