import React from 'react';
import {UserActionsWrap} from "./UserActionsLayout";

function UserActions({dips}) {
    return (
        <UserActionsWrap>
            <li>찜&nbsp;{dips}</li>
            <li>공유</li>
            <li>함께 주문</li>
        </UserActionsWrap>
    );
}

export default UserActions;