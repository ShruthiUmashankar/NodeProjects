// async callbacks functions

const add= (op1,op2,callback)=>{
    setTimeout(()=>{
        const sum = op1+op2;
        console.log('2 seconds up..')
        callback(sum)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})