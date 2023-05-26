let token;

export function setToken(value) {
    token = value;
}

function getCookie() {
    let name = "Token=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export async function simpleFetch(endPoint, method, bodyData) {
    let token = getCookie();
    
    console.log("cookies stored: ", document.cookie);

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