import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAlbums } from '../../requests/albums.js';
import AlbumsListItem from '../../components/Albums/AlbumsListItem/AlbumsListItem.js';
import './AlbumList.css';

function AlbumList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(albums => {
            setAlbums([...albums]);
        });
    }, []);


    return (
        <div className="AlbumList">
            {albums.map(
                album => <AlbumsListItem
                    key={`albumsListItem-${album.id}`}
                    album={album}
                />
            )}
        </div>
    );
}

AlbumList.propTypes = {
    albums: PropTypes.array
};

export default AlbumList;
