import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AlbumsListItem.css';

function AlbumsListItem({ album }) {
    return (
        <div className="AlbumsListItem">
            <Link to={`/albums/${album.id}`}>
                <div>{album.title}</div>
            </Link>
        </div>
    );
}

AlbumsListItem.propTypes = {
    album: PropTypes.object.isRequired
};

export default AlbumsListItem;
