import axios from 'axios';

function fetchPage(url: string): Promise<string | undefined> {
  const htmlData = axios
    .get(url)
    .then((res) => res.data)
    // .then(data=>console.log(data))
    // catalog-product
    .catch((error) => {
      console.error(`There was an error with ${error.config.url}.`);
      console.error(error.toJSON());
    });

  return htmlData;
}

export default fetchPage;
