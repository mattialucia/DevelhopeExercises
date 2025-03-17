// Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
// La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
// La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
// Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    console.log("Recupero dei dati in corso...");
    return new Promise((resolve, reject) => {
        const user = { id: 1, name: 'John' };
        setTimeout(() => {
            if (user.id === 1){
                resolve(user);
            } else {
                reject("ID non found.");
            }
        }, 1500)
    });
  }
  
  function fetchUserPosts(userId, userName) {
    // console.log("Recupero dei post in corso...");
    return new Promise((resolve, reject) => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        setTimeout(() => {
            if (posts.length >= 1){
                console.log("This account has", posts.length, "posts in total.");
                resolve(posts);
            } else {
                reject("No posts found");
            }
        }, 3000)
    });
  }
  
  fetchUserData()
    .then((userData) => {
        console.log("Data user:", userData.name);
        return fetchUserPosts(userData.id, userData.name);
    })
    .then((posts) => {
        posts.forEach(post => console.log("Post", post));
    })
    .catch((error) => console.log("Error:", error));