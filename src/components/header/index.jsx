import React, {useRef} from 'react';
import { Container } from './styles';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';
import { DrawerMenu } from '../DrawerMenu';
import {Avatar} from '@chakra-ui/react';
import Theme from '../../global/theme/dark';

export function Header () {
    const userName = useSelector(state => state.authReducer.user.name)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return(
        <>
            <Container>
                <div className='menu-icon' ref={btnRef} onClick={onOpen} >
                    <HiOutlineMenuAlt3 />
                </div>

                <div className="profile-container">
                    <span>{userName}</span>
                    <Avatar
                        name={userName}
                        src="https://github.com/BrunoPaschoal.png"
                        size= 'md'
                        bg={Theme.colors.secondary}
                        color={Theme.colors.white} 
                        showBorder={true}
                        borderColor={Theme.colors.primary}    
                    />
                </div>        
            </Container>

            <DrawerMenu
                btnRef = {btnRef}
                isOpen={isOpen}
                onClose={onClose}
            />       
        </>
    )
}