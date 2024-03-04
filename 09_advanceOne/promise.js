const p1 = new Promise((resolve, reject)=>{
    //create an async task: db calls, cryptography etc
    setTimeout(()=>{
        console.log("async is completed.")
        resolve()
    }, 1000)
})

p1.then(()=>{
    console.log("Promise consumed!")
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("new promise executed after 1 second")
        resolve()
    }, 1000)
}).then(()=>{
    console.log("new promise resolved!!")
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            username: "akashKamat", 
            pass: 1234
        })
    },1000)
}).then((user)=>{
    console.log(user)
})

const PromiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: "akash kamat",
                pass: 123456
            })
        }else{
            reject('ERROR: user not found')
        }
    }, 2000);
})

//getting username if resolve run...
PromiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("the promise process is Terminated.")
})


const PromiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username: "apple",
                pass: "ms"
            })
        }else{
            reject("ERROR: something is wrong.")
        }
    }, 2000);
})

async function consumep5(){
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumep5();

// async function getjsonsample(){
//     try {
//         const response = await fetch('https://official-joke-api.appspot.com/random_joke')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }
// getjsonsample()

fetch('https://official-joke-api.appspot.com/random_joke')
.then((response)=>{
    const data = response.json()
    return data;
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log('E: ', error)
})