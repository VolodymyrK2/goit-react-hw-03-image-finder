import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'
const ImageGalleryItem = ({ urlImage, altTitle, onClick }) => {
    return (
        <li className={css.gallery__item}>
  <img onClick={onClick} className={css.gallery__image} src={urlImage} alt={altTitle} />
</li>
    )
}
ImageGalleryItem.propTypes = {
    urlImage: PropTypes.string,
    altTitle: PropTypes.string,
    onClick: PropTypes.func   
}
export default ImageGalleryItem;