import { get } from "./httpClient"

export async function getUsers(){
    const response = await get('https://api.github.com/users')
    return response
}
export async function getUsersBySearch(username: string){
    const response = await get(`https://api.github.com/search/users?q=${username}`)
    return response
}
export async function getUserByUsername(username: string){
    const response = await get(`https://api.github.com/users/${username}`)
    return response
}