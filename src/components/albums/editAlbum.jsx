import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbum, editAlbum } from '../../actions/albumActions'
import PropTypes from 'prop-types'

class EditAlbum extends Component {
  state = {
    title: this.props.albums.album.title,
    artist: this.props.albums.album.artist,
    year: this.props.albums.album.year,
    description: this.props.albums.album.description,
    cover: this.props.albums.album.cover,
    songs: this.props.albums.album.songs,
    errors: {}
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    this.props.getAlbum(this.props.match.params.id)
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
    const editedAlbum = {
      title: this.state.title,
      artist: this.state.artist,
      year: this.state.year,
      description: this.state.description,
      cover: this.state.cover,
      songs: this.state.songs
    }
    this.props.editAlbum(this.props.albums.album._id, editedAlbum, this.props.history)
  }

  render() {
    // GET THE ERRORS OBJECT FROM STATE
    const { errors } = this.state

    return (
      <main className="form">
        <div className="content">
          <h1>Edit Album</h1>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-element">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="artist">Artist</label>
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
              <label htmlFor="year">Year</label>
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
              <label htmlFor="description">Description</label>
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
              <label htmlFor="cover">Cover</label>
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
            {/* <div className="form-element">
            <label htmlFor="songs">Songs</label>
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
            </div> */}
            <button>Save</button>
          </form>
        </div>
      </main>
    )
  }
}

editAlbum.propTypes = {
  editAlbum: PropTypes.func.isRequired,
  getAlbum: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  albums: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  albums: state.albums
})

export default connect(
  mapStateToProps,
  { getAlbum, editAlbum }
)(withRouter(EditAlbum))
