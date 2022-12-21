import users from "../db"

const MockRequest = (count) => {
    let result = {
        arr: [],
        status: true
    };
    for (let i = 0; i < count * 6 ; i++){
        if (users[i]){
            result.arr.push(users[i])
        }else{
            result.status = false
        }
    }
    return result
}

export default MockRequest