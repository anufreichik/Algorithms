/**
 *   Parse URL Query String
 *   Implement a function queryStringParser which parse the URL query string to a map
 *
 *		@param {String} qs
 *
 *		queryStringParser("username=test%40snaplogic.com&country=US&id=0&debug&id=1&amount=200")
 *
 *		Result:
 *  		{
 *				username: "test@snaplogic.com",
 *				country: "US",
 *				debug: true,
 *				id: [0, 1],
				amount: 200,
 *			}
 */


function queryStringParser(qs) {

    // your code here
    let resultObj={}
    let urlParamsArray = qs.split('&')
    for(let i=0;i<urlParamsArray.length;i++)
    {
        let item = urlParamsArray[i];
        if(item.indexOf('=')>=0)
        {
            let arr = item.split('=');
            let key =arr[0];
            let val = arr[1];
            let bIsKeyExists=false;

            if(!isNaN(val))
                val = +val;

//       for(let el in resultObj)
//       {
//         if(el===key){
//           bIsKeyExists = true;
//           break;
//         }
//       }

            //if(!bIsKeyExists)
            if(!resultObj.hasOwnProperty(key))
            {
                resultObj[key] = val;
            }
            else
            {
                let valArr=[];
                if(!Array.isArray(resultObj[key]))
                    valArr.push(resultObj[key])
                else
                    valArr=[...resultObj[key]];
                valArr.push(val)
                resultObj[key] = valArr;
            }
        }
        else
        {
            resultObj[item]=true;
        }
    }
    return resultObj;
}


console.log(queryStringParser("username=test%40snaplogic.com&country=US&id=0&debug&id=1&amount=200&id=3"))
