import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
 
export const Header = ({ startLogout }) => (
    <header className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link className="navbar-brand mb-0 h1" to="/dashboard">
                <h1 className=" header__title">Expensify</h1>
            </Link>
        </div>
        <button className="btn my-2 my-sm-2" onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)