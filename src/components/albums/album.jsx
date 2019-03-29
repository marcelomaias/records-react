import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAlbum, deleteAlbum } from '../../actions/albumActions'
import Spinner from '../../components/ui/spinner'

class Album extends Component {
  state = {}

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id)
  }

  handleDelete = id => {
    this.props.deleteAlbum(id, this.props.history)
    console.log(id)
  }

  render() {
    const { album, loading } = this.props.albums
    const { title, artist, year, description, cover, songs } = album
    const { isAuthenticated } = this.props.auth

    return (
      <main className="single">
        <Link to={'/'}>Back</Link>

        <div className="content">
          {loading ? <Spinner /> : null}
          {cover ? <img src={cover} alt="Album Cover" /> : null}
          <h1>{title}</h1>
          <span>{artist}</span>
          {year ? <span>{year}</span> : null}
          {description ? <p>{description}</p> : null}

          {songs ? <span>{songs}</span> : null}
          {isAuthenticated ? (
            <div>
              <button type="button" onClick={() => this.handleDelete(album._id)}>
                Delete
              </button>
              <Link to={`/edit/${album._id}`}>Edit</Link>
            </div>
          ) : null}
        </div>
      </main>
    )
  }
}

Album.propTypes = {
  getAlbum: PropTypes.func.isRequired,
  deleteAlbum: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  albums: state.albums,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getAlbum, deleteAlbum }
)(withRouter(Album))
