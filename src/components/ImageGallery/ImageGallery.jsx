import PropTypes from 'prop-types'
import React, { Component} from "react";
import css from './ImageGallery.module.css'
import Api from '../../services/api'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
    state = {
    page: 1,
    totalImg: 0,
    error: null,
    isLoading: false,
    images: [],
    showModal: false,
    modalImageUrl: '',
    modalAltTitle: ''
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName&&this.state.page>1) {
        return this.resetImageGallery();
    }
    if (prevProps.imageName !== this.props.imageName) {
       this.resetImageGallery();
      }
      if (prevProps.imageName !== this.props.imageName || prevState.page !== this.state.page) {
          this.setState({ isLoading: true })
        Api.getImages(this.props.imageName, this.state.page).then((data) => {
            const newImages = data.hits.map(el => {
            const { id, webformatURL, largeImageURL } = el
            const result = { id, webformatURL, largeImageURL }
            return result
          })
          this.setState({
            totalImg: data.totalHits,
            images: [...this.state.images, ...newImages]
          })
          this.setState({ isLoading: false })
        }).catch(error => {
          this.setState({ error })
        }).finally(() => {
           this.setState({ isLoading: false })
         }) 
  }
  }
  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1 
    }))
  }
  resetImageGallery = () => {
    this.setState({
       page: 1,
    images: []
    })
  }
  handleShowModal = (largeImageURL, altTitle) => {
    this.setState({
      showModal: true,
      modalImageUrl: largeImageURL,
      modalAltTitle: altTitle
    })
  }
  closeModal = () => {
    this.setState(({showModal})=>({
      showModal: !showModal
    }))
  }
  
  render() {
    const { images, totalImg, page,error,isLoading,showModal, modalImageUrl, modalAltTitle } = this.state;
    const lastPage = Math.ceil(totalImg / Api.PER_PAGE);
    const isHiddenButton = (totalImg === 0 || page === lastPage);
    return (
      <>
        {isLoading && <Loader />} 
        {error && alert("Something went wrong, please try again") }
        <ul className={css.gallery}>
          {images && images.map(image => (<ImageGalleryItem
            key={image.id}
            urlImage={image.webformatURL}
            altTitle={this.props.imageName}
            onClick={()=>this.handleShowModal(image.largeImageURL,this.props.imageName)}
          />))}
          </ul>
        {!isHiddenButton && <Button onClick={this.handleClickLoadMore} />}
        {showModal && <Modal
                srcImage={modalImageUrl}
          altTitle={modalAltTitle}
          closeModal = {this.closeModal}
               />}
        </>
    )
  }
}
ImageGallery.propTypes = {
imageName: PropTypes.string
}
export default ImageGallery