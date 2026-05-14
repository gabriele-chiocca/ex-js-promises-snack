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

// function getPostId(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => {
//         fetch(`https://dummyjson.com/users/${post.userId}`)
//           .then((response) => response.json())
//           .then((user) => resolve({ post, user }))
//           .catch((error) => reject(error));
//       })
//       .catch((error) => reject(error));
//   });
// }

// getPostId(1)
//   .then((messaggio) => console.log(messaggio))
//   .catch((errore) => console.log(errore));

//Snack 2

function lanciaDado(scelta) {
  return new Promise((resolve, reject) => {
    console.log('Lancio il dado');

    setTimeout(() => {
      const valore = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

      const verificaValore = valore % 2 == 0 ? 'pari' : 'dispari';

      if (scelta === verificaValore) {
        resolve(`Hai vinto, è uscito il numero ${valore}`);
      } else {
        reject(`Hai perso, è uscito il numero ${valore}`);
      }
    }, 3000);
  });
}

lanciaDado('pari')
  .then((risultato) => console.log(risultato))
  .catch((errore) => console.error(errore));
