function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((obj) => resolve(obj.title))
      .catch((error) => reject(error));
  });
}

getPostTitle(1)
  .then((messaggio) => console.log(messaggio))
  .catch((errore) => console.error(errore));
