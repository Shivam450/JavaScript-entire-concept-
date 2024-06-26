//ASYNC AWAIT
async function fetchUsers(){
const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response
.then(resp => resp.json())
.then(console.log)
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
  ]
//   Promise.all(urls.map(url => fetch(urls).then(resp => json())
//   )).then(array => {
//     console.log('users', array[0])
//     console.log('post', array[2])
//     console.log('send',array[2])
//   })

  // const getData = async function() {
  //   const [users, posts, albu]
  // }