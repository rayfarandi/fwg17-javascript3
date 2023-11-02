const errorHendler = (error, url) => {
    if (error.message === 'Invalid response') {
      console.log('Sorry, response from the server');
    } else if (error.message === 'Failed to parse URL from ' + url) {
      console.log(`Apakah URL JSONnya benar ini? ${url}`);
    } else {
      console.log(error.message);
    }
  };
  
  const getData = async (url, cb) => {
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error('Invalid response');
      }
      const result = await response.json();
      if (result.length) {
        cb(result);
      } else {
        throw new Error(message);
      }
    } catch(error) { errorHendler(error, url)}
  }
  
  const nameToArray = (data) => {
    console.log(data.map((item) => item.name));
  }
  
  getData('https://jsonplaceholder.typicode.com/usersaaaa', nameToArray) // jika invalid response => Sorry, response from the server
  getData('facebook.com', nameToArray) // jika Failed to parse URL from => Apakah URL JSONnya benar ini? url yg di tulis
  getData('https://jsonplaceholder.typicode.com/users', nameToArray) // jika benar akan menampilkan data yang diinginkan
  