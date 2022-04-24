const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/';

export const loginByUsername = (username: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const loginByEmail = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const checkIfEmailExists = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getUsersByRole = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getAllRoles = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const checkIfUsernameExists = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const checkIfContactNumberExists = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getAllContactNumbers = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getAllEmails = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getAllUsers = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

export const getCurrentUser = (email: string, password: string) => {
    fetch(DEFAULT_URL + 'todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}