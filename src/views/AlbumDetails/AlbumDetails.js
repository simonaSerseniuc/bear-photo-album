import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPhotosById } from '../../requests/albums.js';
import Photo from '../../components/Albums/Photo/Photo.js';
import './AlbumDetails.css';

function AlbumDetails({ match }) {
    const [allPhotos, setPhotos] = useState([]);
    const { id } = match?.params || {};
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        if (
            Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
            isFetching
        )
            return;
        setIsFetching(true);
    };

    const fetchData = () => {
        getPhotosById(id, page, perPage).then(({photos, page, perPage}) => {
            setPhotos([...allPhotos, ...photos]);
            setPage(page+1);
        });
    }

    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    const fetchMoreListItems = () => {
        fetchData();
        setIsFetching(false);
    };

    return (
        <div className="AlbumDetails">
            {allPhotos.map(
                photo => <Photo
                    key={`albumsListItem-${photo.id}`}
                    photo={photo}
                />
            )}
        </div>
    );
}

AlbumDetails.propTypes = {
    allPhotos: PropTypes.array,
    page: PropTypes.number,
    perPage: PropTypes.number,
    isFetching: PropTypes.bool
};

export default AlbumDetails;
