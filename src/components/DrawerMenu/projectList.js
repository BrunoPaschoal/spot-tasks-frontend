import React from 'react';
import { ProjectListContainer } from './styles';
import { FaProjectDiagram } from 'react-icons/fa';

export const PojectList = () => {

    const currentPath = window.location.pathname;
    const currentPathArray = currentPath.split('/')
    const indexOfProjectId = currentPathArray.length - 1

    return (
        <ProjectListContainer>

            <div className='title-button-container'>
                <h2>PROJETOS</h2>
                <button>+ Criar projeto</button>
            </div>

            <ul>
                <a href='/project/618720b4dc6d2ada4c5fd579'>
                    <li className={currentPathArray[indexOfProjectId] === '618720b4dc6d2ada4c5fd579' ? 'active' : null}>
                        <div className='icon-project-container'>
                            <FaProjectDiagram/>
                        </div>
                        <span>Pizza Smart</span>
                    </li>
                </a>          

                <a href="/project/6189bc5b3c86b6eee35f9ae0">
                    <li className={currentPathArray[indexOfProjectId] === '6189bc5b3c86b6eee35f9ae0' ? 'active' : null}>
                        <div className='icon-project-container'>
                            <FaProjectDiagram/>
                        </div>
                        <span>Cute Pets</span>
                    </li>
                </a>
            </ul>
        </ProjectListContainer>
    )
}