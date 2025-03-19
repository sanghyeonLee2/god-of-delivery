import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LogoSvg} from "../../../assets/img/logo.svg";

function Logo(props) {
    return (
        <Link to="/">
            <LogoSvg width="100" height="50"/>
        </Link>
    );
}

export default Logo;