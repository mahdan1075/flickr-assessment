const FLICKR_API_KEY = '5744202d48c0dee408c330c73c961949';

export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=30`;

  return fetch(FLICKR_API_ENDPOINT)

  .then(response => {
    return response.json()
  })

  .then(json => {
    return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
      id,
      title,
      mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }));
  });
};
