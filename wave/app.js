let show = document.querySelector('.center')
let btn = document.getElementById('btn')

btn.addEventListener('click', e =>  show.style.display = 'flex' )



// let promise1 = new Promise((res , rej) =>{
//     setTimeout(() =>{
//         res('1')
//         // console.log('Promsie 1')
//     }, 3000)
// })
// let promise2 = new Promise((res , rej) =>{
//     setTimeout(() =>{
//         res('2')
//         // console.log('Promise 2')
//     }, 5000)
// })
// let promise3 = new Promise((res , rej) =>{
//     setTimeout(() =>{
//         res('3')
//         // console.log('Promise 3')
//     }, 1000)
// })


// const wait = async () =>{
//         let one = await promise1
//         let two = await promise2
//         let three = await promise3
//         console.log(one);
//         console.log(two);
//         console.log(three);
// }
// wait()