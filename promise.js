const posts = [
    {title : 'Post One', body: 'This is post one'},
    {title : 'Post Two', body: 'This is post two'}
];


const user = {
    usesrname: "Kam",
    lastactivitytime: "11nov"
}
// console.log("Checkkkkkkk",user.lastactivitytime);



function getPosts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((post, index)=>{
                output += `<li>${post.title}</li>`
            });
            resolve(output);
        }, 1000)
    })
   
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve(posts);
            }else{
                reject("Error while creating Post");
            }
        }, 2000);
    })
   
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.lastactivitytime = new Date().getTime();
            

           resolve(user.lastactivitytime);
        }, 3000);

    })
}

function deletePost(){
     return new Promise((resolve, reject)=>{
      setTimeout(()=>{
            if(posts.length > 0){
                 const poppedElement  = posts.pop();
                 resolve(posts);
             } else {
                 reject("ERROR");
             }
     }, 1000)
 })
}

Promise.all([createPost({title: 'Post Three', body: 'This is post three'}), updateLastUserActivityTime()])
.then(([createPostResolve, updateLastUserActivityTimeResolve])=>{
     
    getPosts();
    
    console.log(createPostResolve, updateLastUserActivityTimeResolve);
    deletePost().then(()=>{
        console.log(posts);
    });
        
})








// Promise.all([createPost(), updateLastUserActivityTime()])
// .then(([createPostResolves, updateLastUserActivityTimeResolves])=>{
//     console.log(updateLastUserActivityTimeResolves);
// })
// .catch(err => console.log(err));

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error = true;
//             if(!error){
//                  resolve();
//             }else{
//                 reject('ERROR: Something went wrong');
//             }
//         }, 2000) ;
//     });
// }

// function deletePost(){
//     createPost({title: 'Post Three', body: 'This is post three'})
//     .then(()=> {
//         getPosts()
//         deletePost()
//     })
//     .catch(err => console.log(err))
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             user.lastactivitytime = new Date().getTime();
//             resolve(user.lastactivitytime);
//         }, 1000)
//     })
// }





