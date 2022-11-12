class Api {

    getPerformance(userId){
        return fetch(`http://localhost:3000/user/${userId}/performance`)
            .then(data => data.json())
    }

    getActivity(userId){
        return fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(data => data.json())
    }

    getAverageSessions(userId){
        return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then(data => data.json())
    }

    getUser(userId){
        return fetch(`http://localhost:3000/user/${userId}`)
            .then(data => data.json())
    }

}



class ApiMock {
    getPerformance(userId){
        return Promise.resolve([])
    }

    getActivity(){
        return Promise.resolve([])
    }

    getAverageSessions(){
        return Promise.resolve([])
    }

    getUser(){
        return Promise.resolve([])
    }
}

export default Api;