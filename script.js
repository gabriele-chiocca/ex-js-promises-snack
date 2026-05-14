// Snack 1

// function getPostTitle(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((obj) => resolve(obj.title))
//       .catch((error) => reject(error));
//   });
// }

// getPostTitle(1)
//   .then((messaggio) => console.log(messaggio))
//   .catch((errore) => console.error(errore));

//Snack 1 BONUS

function getPostId(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((user) => resolve({ post, user }))
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

getPostId(1)
  .then((messaggio) => console.log(messaggio))
  .catch((errore) => console.log(errore));
