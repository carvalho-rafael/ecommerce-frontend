import { NavLink } from 'react-router-dom'
import UserStatus from '../../userStatus'
import { MenuContainer, StatusContainer } from './styles'

export default function Menu() {
    return (
        <MenuContainer>
            <StatusContainer>
                <UserStatus />
            </StatusContainer>
            <hr />
            <li>
                <NavLink to='/dashboard' exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/products'>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/categories'>
                    Categories
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/settings' exact>
                    Settings
                </NavLink>
            </li>
        </MenuContainer>
    )
}