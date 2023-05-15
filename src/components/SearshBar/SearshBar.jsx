import PropTypes from 'prop-types'
import css from './SearshBar.module.css'
import { Component } from 'react'

class SearshBar extends Component {
    state = {
        value:''
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value.trim() );
        // this.formReset();
    }
    formReset = () => {
        this.setState({
            value:''
        })
    }
    render() {
    return (
    <header className={css.searchbar}>
  <form onSubmit={this.handleSubmit} className={css.searchForm}>
    <button type="submit" className={css.searchForm__button}>
      <span className={css.button__label}>Search</span>
    </button>

    <input
      className={css.searchForm__input}
      type="text"
      autoComplete="off"
      // autofocus
      placeholder="Search images and photos"
      value={this.state.value}
      onChange = {this.handleChange}              
    />
  </form>
</header>
  )
}
  
}

SearshBar.propTypes = {}

export default SearshBar