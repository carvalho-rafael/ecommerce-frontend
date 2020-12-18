import { Link } from "react-router-dom";

import { Context } from '../../context/AuthContext'
import { useContext } from "react";

import { UserStatusContainer } from './userStatusStyles'

export default function UserStatus() {
    const { authenticated, user, handleLogout } = useContext(Context);

    return (
        <UserStatusContainer>
            { authenticated ? (
                <>
                    <p>Welcome, {user.name}!</p>
                    <span onClick={handleLogout}> Logout </span>
                </>
            ) : (
                    <Link to="/login"> Login </Link>
                )}
        </UserStatusContainer>

    )
}
