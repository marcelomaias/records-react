import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../actions/albumActions'
import PropTypes from 'prop-types'

import Spinner from '../components/ui/spinner'

class Home extends Component {
  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    const { albums, loading } = this.props.albums

    return (
      <div>
        <h1>Home</h1>
        {loading ? <Spinner /> : null}
        <ul>
          {albums.map(album => {
            return (
              <li key={album._id}>
                <h2>{album.title}</h2>
                <span>{album.artist}</span>
                <span> {album.year}</span>
                <Link to={`/album/${album._id}`}>More</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Home.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  albums: state.albums
})

export default connect(
  mapStateToProps,
  { getAlbums }
)(Home)
