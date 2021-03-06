import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addAlbum } from '../../actions/albumActions'
import PropTypes from 'prop-types'

import BackButton from '../../components/ui/back-button'

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
      <main className="form">
        <div className="content">
          <BackButton click={this.props.history.goBack} />
          <h1>Add Album</h1>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-element">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
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
                value={this.state.year}
                onChange={this.handleInput}
                className={errors.year ? 'error' : null}
              />
              {errors.year && <small>{errors.year}</small>}
            </div>

            <div className="form-element">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleInput}
                className={errors.description ? 'error' : null}
                rows="8"
              />
              {errors.description && <small>{errors.description}</small>}
            </div>
            <div className="form-element">
              <label htmlFor="cover">Cover</label>
              <input
                type="text"
                name="cover"
                id="cover"
                value={this.state.cover}
                onChange={this.handleInput}
                className={errors.cover ? 'error' : null}
              />
              {errors.cover && <small>{errors.cover}</small>}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </main>
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
