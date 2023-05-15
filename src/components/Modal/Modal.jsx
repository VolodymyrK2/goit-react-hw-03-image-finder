import { Component } from 'react';
import PropTypes from 'prop-types'
import css from './Modal.module.css'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    }
  componentWillUnmount() {
window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = e => {
          if (e.code === 'Escape') {
        this.props.closeModal();
      }
  }
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  }
  render(){
   const { srcImage, modalAltTitle}=this.props
    return (
      <div onClick={this.handleOverlayClick} className={css.overlay}>
        <div className={css.modal}>
          <img src={srcImage} alt={modalAltTitle} />
        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  srcImage: PropTypes.string,
  altTitle: PropTypes.string,
  closeModal: PropTypes.func
}
export default Modal