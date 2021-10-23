import React, {useRef} from 'react';
import { Container } from './styles';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { useDisclosure } from '@chakra-ui/react';
import { DrawerMenu } from '../DrawerMenu';

export function Header () {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return(
        <>
            <Container>
                <div className='menu-icon' ref={btnRef} onClick={onOpen} >
                    <HiOutlineMenuAlt3 />
                </div>

                <div className="buttons-container">
                    <button>Notificações</button>
                    <button>@Menções</button>                    
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