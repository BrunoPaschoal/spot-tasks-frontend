import React from 'react';
import {DrawerHeaderStyled} from './styles';
import { useSelector } from 'react-redux';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Avatar,   
} from '@chakra-ui/react';

import { MenuList } from './menuList';
import Logo from '../../assets/logo.svg';
import Theme from '../../global/theme/dark';

export const DrawerMenu = ({btnRef, isOpen, onClose}) => {
    const userName = useSelector(state => state.authReducer.user.name)
    const userEmail = useSelector(state => state.authReducer.user.email)

    return(
        <Drawer                          
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}            
        >
            <DrawerOverlay/>
            <DrawerContent
                bg={Theme.colors.foreground}              
            >            

                <DrawerHeaderStyled as={DrawerHeader}
                    mt='2'                                  
                >
                    <img src={Logo} className='logo' alt="logo"/>

                    <Avatar
                        name={userName}
                        src="https://github.com/BrunoPaschoal.png"
                        size= 'lg'
                        bg={Theme.colors.secondary}
                        color={Theme.colors.white}
                        mt='60px'
                    />

                    <span className='user-name-drawer'>{userName}</span>
                    <span className='user-email-drawer'>{userEmail}</span>
                </DrawerHeaderStyled>       

                <DrawerBody
                    mt='10px'
                >                    
                    <MenuList/>                    
                </DrawerBody>     
            </DrawerContent>
        </Drawer>
    )
}

