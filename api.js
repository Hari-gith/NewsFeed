
const processContact = news  => ({
    title : news.title,
    author: news.author,
  })
  
   export  const fetchUsers = async () => {
     
     /*fetch('http://hn.algolia.com/api/v1/items/1', {
      method: 'GET'
      //Request Type 
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {
      //Success 
      console.log(responseJson);
  })
  //If response is not in json then in error
  .catch((error) => {
      //Error 
      console.error(error);news
  });*/
    const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
    var results = await response.json()
    console.log(results.hits.map(processContact))
    return results.hits.map(processContact)
  }
  