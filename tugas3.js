const errorHendler = (error, url) => {
    if (error.message === 'Invalid response') {
      console.log('Sorry, response from server');
    } else if (error.message === 'Failed to parse URL from',url) {
      console.log(`apakah Url Json nya benar ini? ${url}`);
    } else {
      console.log(error.message);
    }
  };
  
  const getData = (url, cb) => {
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          if (result.length) {
            cb(result);
          } else {
            throw new Error('Invalid response');
          }
        }).catch((error) => errorHendler(error, url));
      }).catch((error) => errorHendler(error, url));
  };
  
  const nameToArray = (data) => {
    console.log(data.map((item) => item.name));
  };
  
  getData('https://jsonplaceholder.typicode.com/usersaaaa', nameToArray) // jika invalid respons => Sorry, response from server
  getData('facebook.com', nameToArray) // jika Failed to parse URL from =>apakah Url Json nya benar ini? url yg di tulis
  getData('https://jsonplaceholder.typicode.com/users',nameToArray) // jika benar akan menampilkan data yg di inginkan
