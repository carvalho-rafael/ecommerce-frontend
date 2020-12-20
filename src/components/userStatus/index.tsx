/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import { Context } from '../../context/AuthContext'
import { useContext } from "react";

import { UserStatusContainer } from './styles'

export default function UserStatus() {
    const { authenticated, user, handleLogout } = useContext(Context);

    return (
        <UserStatusContainer>
            { authenticated ? (
                <>
                    <span>Welcome, {user.name}!</span>
                    <a onClick={handleLogout}> Logout </a>
                </>
            ) : (
                    <Link to="/login"> Login </Link>
                )}
        </UserStatusContainer>

    )
}
