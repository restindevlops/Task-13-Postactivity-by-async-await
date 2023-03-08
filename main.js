

//Aysnc Await
//--------------------------------------------------------------------------------

const posts=['POST 1'];

async function postactivity() {

const createPost=  new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push( 'POST 2');
            resolve(posts);
        }, 2000)
    }) 
// console.log(createPost);

var user={
    username: 'restin',
    lastactivityTime:'08 th March'
}

const deletePost =  new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve(posts);
            console.log(posts);
        }, 2000)
    }) 

    

const update = new Promise( (resolve, reject) => {
    user.lastactivityTime=new Date().getTime();
    resolve(user.lastactivityTime)
})
// console.log(update);     


  
   let [a,b]=await Promise.all([createPost,update])
 
   console.log(a,b);
  //console.log(deletePost);
    
   
   
}

postactivity();

