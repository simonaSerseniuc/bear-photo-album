const urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

export const getAlbums = async () => {
    const response = await fetch(urlAlbums);
    const albums = await response.json();

    return albums;
}

export const getPhotosById = async (id, page, perPage) => {
    const response = await fetch(urlPhotos);
    const photos = await response.json();
    const filtered = photos.filter(photo => photo.albumId === parseInt(id));
    const filteredPage = filtered.slice((page-1) * perPage, page*perPage );

    return {
        page,
        pages: Math.ceil(filtered.length / perPage),
        photos: filteredPage
    };
}
