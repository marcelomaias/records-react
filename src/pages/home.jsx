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
    const { isAuthenticated } = this.props.auth

    return (
      <main className="grid">
        {loading ? <Spinner /> : null}

        {!isAuthenticated ? (
          <div className="info">
            <p>This is a demo of a simple CRUD React App.</p>
            <p>You can register with any email, or use the following login information:</p>
            <p>
              <code>
                email: john@mail.com <br /> password: 123456
              </code>
            </p>
          </div>
        ) : null}

        <ul className="grid">
          {albums.map(album => {
            return (
              <li key={album._id}>
                <Link to={`/album/${album._id}`}>
                  <img src={album.cover} alt="Album cover" />
                  <h2>{album.title}</h2>
                  <span>{album.artist}</span>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                    </svg>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

Home.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  albums: state.albums,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getAlbums }
)(Home)
