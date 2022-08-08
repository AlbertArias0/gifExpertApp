export const getGifs = async (categoria) => {
    //api.giphy.com/v1/gifs/search?api_key=
    //q=
    //limit=
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=k1ibpOmrdbbQQe2i2UA2fXoNcZ9DS2wH`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}
