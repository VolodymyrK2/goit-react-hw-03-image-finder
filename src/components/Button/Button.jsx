import css from './Button.module.css'
import PropTypes from 'prop-types'
const Button = ({onClick}) => {
    return (
        <button
            className={css.loadMore__btn}
            type='button'
            onClick = {onClick}
        >
            Load more
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func
}
export default Button;