const request = async (method, url, data) => {
    try{
        // const user = localStorage.getItem('auth');
        // let auth = JSON.parse('{}');
        // if(user !== 'undefined' && user){
        //     auth = JSON.parse(user);
        // }

        // let headers = {}

        // if (auth.accessToken) {
        //     headers['X-Authorization'] = auth.accessToken;
        // }

        let beginningRequest;
        if(method === 'GET'){
            // beginningRequest = fetch(url,{ headers })
            beginningRequest = fetch(url)
        }
        else{
            beginningRequest = fetch(url, {
                method,
                headers: {
                    // ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await beginningRequest;
        let result = null;
        if(response.status === 200){ 
            result = await response.json();
        }
        return result;
    }catch(err){
        console.log(err);
    }
}

export const get = request.bind({}, "GET")
export const post = request.bind({}, "POST")
export const put = request.bind({}, "PUT")
export const del = request.bind({}, "DELETE")
export const patch = request.bind({}, "PATCH")