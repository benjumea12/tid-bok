import React from 'react'
import ReactDOM from 'react-dom'
// Resourses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// Styled components
import { ModalOverlay } from './Modal.styled';

// Interfaces
export interface IModalProps {
    openModal: boolean
    onCloseModal: Function
    size?: 'sm' | 'md' | 'lg'
    children?: JSX.Element
}

// Div container modal portal
const container: HTMLDivElement = document.createElement("div")
const modalRoot: HTMLElement = document.getElementById("root-modal") || document.createElement("div")
modalRoot.appendChild(container)

const Modal = (props: IModalProps): JSX.Element => {
    const { openModal, onCloseModal, size, children } = props        

    const handleClose = () => {
        onCloseModal()
    }

    const handleStopPropagation = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }

    return  ReactDOM.createPortal(
                <ModalOverlay openModal={openModal} onClick={handleClose} size={size}>
                    <div className='modalContent' onClick={handleStopPropagation}>
                        <FontAwesomeIcon 
                            icon={faTimes}  
                            className='icon' 
                            onClick={handleClose}
                        />
                        { children }
                    </div>
                </ModalOverlay>,
                container
            )
}

export default Modal;
