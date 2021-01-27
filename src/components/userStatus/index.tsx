import { Link } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext'
import { useContext } from "react";

import { UserStatusContainer } from './styles'

export default function UserStatus() {
    const { authenticated, user, handleLogout } = useContext(AuthContext);

    return (
        <UserStatusContainer>
            { authenticated ? (
                <>
                    <span>Welcome, {user.email}!</span>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                    <button>
                        <Link to="/login"> Login </Link>
                    </button>
                )}
        </UserStatusContainer>

    )
}
