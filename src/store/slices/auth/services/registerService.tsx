const DEFAULT_URL = 'http://localhost:8080/';

const requestOptions = (list: any) => {
    return {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(list)
    }
};

export const register = async (name: string, username: string, password: string, email: string, contactNumber: string) => {
    let reply: any;
    const userObj =
    {
        "id": null,
        "name": name,
        "username": username,
        "password": password,
        "email": email,
        "contactNumber": contactNumber,
        "roleDtos": []
    }

    try {
        await fetch(DEFAULT_URL + 'api/appuser/common', requestOptions(userObj))
            .then(response => reply = response)
            .catch(error => console.log(error))
    } catch (err) {
        console.log(err)
    }

    return reply;
}