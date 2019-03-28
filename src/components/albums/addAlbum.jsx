import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addAlbum } from '../../actions/albumActions'
import PropTypes from 'prop-types'

class AddAlbum extends Component {
  state = {
    title: '',
    artist: '',
    year: '',
    description: '',
    cover: '',
    songs: [],
    errors: {}
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newAlbum = {
      title: this.state.title,
      artist: this.state.artist,
      year: this.state.year,
      description: this.state.description,
      cover: this.state.cover,
      songs: this.state.songs
    }
    this.props.addAlbum(newAlbum, this.props.history)
  }

  render() {
    // GET THE ERRORS OBJECT FROM STATE
    const { errors } = this.state

    return (
      <div>
        <h1>AddAlbum</h1>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-element">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInput}
              className={errors.title ? 'error' : null}
            />
            {errors.title && <small>{errors.title}</small>}
          </div>
          <div className="form-element">
            <input
              type="text"
              name="artist"
              id="artist"
              placeholder="Artist"
              value={this.state.artist}
              onChange={this.handleInput}
              className={errors.artist ? 'error' : null}
            />
            {errors.artist && <small>{errors.artist}</small>}
          </div>
          <div className="form-element">
            <input
              type="text"
              name="year"
              id="year"
              placeholder="Year"
              value={this.state.year}
              onChange={this.handleInput}
              className={errors.year ? 'error' : null}
            />
            {errors.year && <small>{errors.year}</small>}
          </div>
          <div className="form-element">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleInput}
              className={errors.description ? 'error' : null}
            />
            {errors.description && <small>{errors.description}</small>}
          </div>
          <div className="form-element">
            <input
              type="text"
              name="cover"
              id="cover"
              placeholder="Cover"
              value={this.state.cover}
              onChange={this.handleInput}
              className={errors.cover ? 'error' : null}
            />
            {errors.cover && <small>{errors.cover}</small>}
          </div>
          <div className="form-element">
            <input
              type="text"
              name="songs"
              id="songs"
              placeholder="Songs"
              value={this.state.songs}
              onChange={this.handleInput}
              className={errors.songs ? 'error' : null}
            />
            {errors.songs && <small>{errors.songs}</small>}
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

AddAlbum.propTypes = {
  addAlbum: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { addAlbum }
)(withRouter(AddAlbum))