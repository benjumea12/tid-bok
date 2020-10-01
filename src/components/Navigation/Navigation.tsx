import React, { useState, useContext } from 'react'
// Reach router
import { Link } from '@reach/router'
// Resource
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import LogoName from '../../images/@1x/logo-name.png'
import Avatar from '../../images/@1x/avatar.png'
// My components 
import { Typography, Notifications } from '../index'
// Styled components
import { Container, ContentNav, ContentRight } from './Navigation.styled'
// Context
import MyContext from '../../context'

interface IPropsNavigation {
    children?: JSX.Element
    autoShow?: boolean | true
}


const Navigation = (props: IPropsNavigation): JSX.Element => {
    const [openNav, setOpenNav] = useState(false)
    const [selected, setSelected] = useState(0)

    // Context
    const context = useContext(MyContext)

    const items = [
        {name: 'Inicio', path:'./'},
        {name: 'Corredores', path:'runners'},
        {name: 'Recorridos', path:'trails'}, 
        {name: 'Tiempos', path:'times'}
    ]

    const handleStopPropagation = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }   

    const handleLogOut = () => {
        context.setIsLogin(false)
    }

    return(
        <Container>
            <ContentNav autoShow={props.autoShow} openNav={openNav} selected={selected} onClick={() => setOpenNav(false)}>
                <nav className='nav-content' onClick={handleStopPropagation}>
                    <div className='header'>
                        <div className='logo-name'>
                            <img src={LogoName} alt='tid bok' />
                        </div>
                        <div className='avatar'>
                            <img src={Avatar} alt='tid bok' />
                        </div>
                        <div className='name'>
                            <Typography variant='h6' bg='black'>Esteban Benjumea Castrillon</Typography>
                        </div>
                        <div className='actions'>
                            <div className='margin'>
                                <Notifications beagle={true} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCog} size='2x' className='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className='menu-nav'>
                        <div className='contain'>
                            <div className='selection'></div>
                            <ul className='list-menu'>
                                {
                                    items.map((item, index) => (
                                        <li 
                                            key={index}
                                            onClick={() => setSelected(index)}
                                            className={ index === selected ? 'selected' : '' }
                                        >
                                            <Link className='link' to={item.path}>
                                                <p>{ item.name }</p>
                                            </Link>
                                        </li> 
                                    ))
                                }
                            </ul>
                            <div className='logOut'>
                                <p onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} className='icon' /> Salir</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </ContentNav>
            <ContentRight>
                <div className='content'>
                    { props.children }
                </div>
                <nav className='header-nav'>
                    <div className='logo-name'>
                        <img src={LogoName} alt='tid bok' />
                    </div>
                    <div className={`icon ${openNav && `open`}`} onClick={() => setOpenNav(true)} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </ContentRight>
        </Container>
    )
}

export default Navigation