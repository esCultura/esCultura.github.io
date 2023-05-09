let token = '5a51301e4453a7c37fbbe3a65636009d0665e09e';

export function setToken(value) {
    token = value;
}

export async function simpleFetch(endPoint, method, bodyData) {
    console.log("tokenValue: ", token);
    console.log("endPoint: ", endPoint);

    let host = 'http://127.0.0.1:8000/';
    console.log("url: ", host+endPoint);

    let result;
    if (method === "GET" || method === "HEAD") {
        result = await fetch(host+endPoint,  {   
            method: method,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Authorization': 'Token '+ token, 
            },
        })
    }
    else {
        result = await fetch(host+endPoint,  {   
            method: method,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Authorization': 'Token '+ token, 
            },
            body: JSON.stringify(bodyData),
        })
    }

    try {
        let resultJson = await result.json();
        return resultJson;
    } catch (e) {
    }
}