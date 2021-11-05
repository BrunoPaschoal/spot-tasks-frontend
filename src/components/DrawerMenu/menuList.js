import React from 'react';
import { MenuListContainer } from './styles';
import { GoTasklist } from 'react-icons/go';
import { BiLogOut, BiChalkboard } from 'react-icons/bi';
import { BsFillClockFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules/auth/actions';
import { Link } from 'react-router-dom';

export const MenuList = () => {
    const dispatch = useDispatch()

    function handleLogOut() {
        dispatch(logout())
    }
    return (
        <MenuListContainer>
            <ul>
                <Link to='/'>
                    <li className={window.location.pathname === '/' ? 'active' : null}>
                        <div>
                            <GoTasklist />
                        </div>
                        <span>Tasks</span>
                    </li>
                </Link>


                <Link to='/kanban'>
                    <li className={window.location.pathname === '/kanban' ? 'active' : null}>
                        <div>
                            <BiChalkboard />
                        </div>
                        <span>Kanban</span>
                    </li>
                </Link>

                <Link to='/pomodoro'>
                    <li className={window.location.pathname === '/pomodoro' ? 'active' : null}>
                        <div>
                            <BsFillClockFill />
                        </div>
                        <span>Pomodoro</span>
                    </li>
                </Link>

                <li onClick={() => handleLogOut()}>
                    <div>
                        <BiLogOut />
                    </div>
                    <span>Sair</span>
                </li>

            </ul>
        </MenuListContainer>
    )
}