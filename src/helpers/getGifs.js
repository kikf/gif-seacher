export const getGifs = async ( c ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ucW4hzthA2ZjLJdFutH7FSHLK3wsV10F&q=${encodeURI(c)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const imagenes = data.map(img => {
        return {
            id: img.id,
            name: img.username,
            title: img.title,
            url: img.images?.downsized_medium.url,
            link: img.url
        }                
    })
    return imagenes;
}