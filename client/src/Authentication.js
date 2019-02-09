import React from 'react';
import { Link } from 'react-router-dom';

import Auth from './auth';

const Authentication = props => (
    props.token
    ? <div onClick={() => Auth.logout()}><button type="button" class="btn btn-outline-danger"> Logout </button></div>
    : <button type="button" class="btn btn-outline-success"> <Link to="/" >Login</Link> </button>
)

export default Authentication;