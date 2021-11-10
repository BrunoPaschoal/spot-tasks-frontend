import React from 'react';
import { DrawerHeaderStyled, DrawerFooterStyled } from './styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules/auth/actions';
import { BiLogOut } from 'react-icons/bi';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    Avatar,
} from '@chakra-ui/react';

import { MenuList } from './menuList';
import { PojectList } from './projectList';
import Logo from '../../assets/logo.svg';
import Theme from '../../global/theme/light';

export const DrawerMenu = ({ btnRef, isOpen, onClose }) => {
    const userName = useSelector(state => state.authReducer.user.name)
    const userEmail = useSelector(state => state.authReducer.user.email)

    const dispatch = useDispatch()

    function handleLogOut() {
        dispatch(logout())
    }

    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent
                bg={Theme.colors.foreground}
                padding = '0'
            >

                <DrawerHeaderStyled as={DrawerHeader}
                    mt='2'
                    
                >
                    <img src={Logo} className='logo' alt="logo" />                    
                </DrawerHeaderStyled>

                <DrawerBody
                    mt='10px'
                    padding='0'
                >
                    <MenuList />
                    <PojectList/>
                </DrawerBody>
                
                <DrawerFooterStyled
                    as={DrawerFooter}
                    
                >   
                    <div className='left-side-info-footer'>
                        <Avatar
                            name={userName}
                            size='sm'
                            bg={Theme.colors.secondary}
                            color={Theme.colors.white}
                        />            

                        <div className='text-footer-container'>
                            <span className='user-name-drawer'>{userName}</span>
                            <span className='user-email-drawer'>{userEmail}</span>
                        </div>
                    </div>
         

                    <div className='logout-button-container' onClick={() => handleLogOut()}>
                        <BiLogOut/>
                    </div>
                </DrawerFooterStyled>
                
            </DrawerContent>
        </Drawer>
    )
}

