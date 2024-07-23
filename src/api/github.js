const username = 'francis-tg'
const BASE_URL = `https://api.github.com/users/${username}`

const headers = {
    Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
}

export function fetchProfile(){
    return fetch(BASE_URL,{
        method:'GET',
        headers
    })
}