import React from 'react';
import {UserActionsWrap} from "./UserActionsLayout";

function UserActions(props) {
    return (
        <UserActionsWrap>
            <li>찜</li>
            <li>공유</li>
            <li>함께 주문</li>
        </UserActionsWrap>
    );
}

export default UserActions;