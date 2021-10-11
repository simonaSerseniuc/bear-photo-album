import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveAs } from "file-saver";
import './Photo.css';

function Photo({ photo }) {
    const { id, title, url, thumbnailUrl } = photo || {};

    const downloadPhoto = () => {
        saveAs(url,`${title}.jpeg`);
    }

    return (
        <div className="Photo">
            <button
                className="Photo-button-download"
                onClick={downloadPhoto}
            >
                Download
            </button>
            <a href={url} target="_blank">
                <img src={thumbnailUrl} />
                <div className="Photo-title">{title}</div>
            </a>
        </div>
    );
}

Photo.propTypes = {
    photo: PropTypes.object.isRequired
};

export default Photo;
