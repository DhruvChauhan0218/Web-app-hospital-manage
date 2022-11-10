
// const request = async ( method,path,data) => {
//     try {
//         const url = `http://localhost:3000${path}`
//         const option = {
//             method: method,
//             // url: `http://localhost:3000${path}`,
//             headers : { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//         if (method == 'GET') {
//             option['params'] = data
//         }
//         else {
//             option['body'] = JSON.stringify(data)
//         }
//         debugger
//         const res = await fetch(url,option)
//         const newRes = await res.json()
//         console.log(newRes);
//         return res

//     } catch (error) {
//         console.log(error);
//     }

// }


const request = async ( method,path,data) => {
    try {
        const option = {
            method: method,
            url: `http://localhost:3000${path}`,
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        if (method == 'GET' && data) {
            option['params'] = data
        }
        else {
            option['data'] = data
        }
        const res = await axios(option)
        return res.data

    } catch (error) {
        console.log(error);
    }

}
