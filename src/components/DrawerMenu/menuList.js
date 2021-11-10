import React from 'react';
import { MenuListContainer } from './styles';
import { BiChalkboard } from 'react-icons/bi';
import { BsFillClockFill, BsFillGearFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const MenuList = () => {
    
    return (
        <MenuListContainer>
            <ul>
                <Link to='/'>
                    <li className={window.location.pathname === '/' ? 'active' : null}>
                        <div>
                            <HiHome />
                        </div>
                        <span>Home</span>
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

                <li>
                    <div>
                        <BsFillGearFill />
                    </div>
                    <span>Configurações</span>
                </li>

            </ul>
        </MenuListContainer>
    )
}