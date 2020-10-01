import React, { useState, Fragment, useContext } from 'react'
// Resourses
import illustration from '../../images/@1x/Illustration.png'
import facebook from '../../images/@1x/Facebook.png'
import youtube from '../../images/@1x/Youtube.png'
import instagram from '../../images/@1x/Instagram.png'
import logo from '../../images/@1x/Logo.png'
// My components
import { Typography, Span, Button }from '../../components'
import Form from './Form'
// Styled components
import { Container, ContentLeft, ContentRight, SocialStyled } from './Start.styled'
// Reach router
import { Redirect } from '@reach/router'
// Context
import MyContext from '../../context'

// Component social
const Social = () => {
    return (
        <SocialStyled className='social'>
            <img src={instagram} alt='instragram' />
            <img src={facebook} alt='facebook' />
            <img src={youtube} alt='youtube' />
        </SocialStyled>
    )
}

const Start = () => {
    // State to show illustration or form
    const [showForm, setShowForm] = useState<boolean>(false)
    // State to show registry form or login form
    const [registryForm, setRegistryForm] = useState<boolean>(false)

    // Context
    const context = useContext(MyContext)
    
    // Function to show form
    const handleShowForm = (action: boolean) => {
        setRegistryForm(action)
        setShowForm(true)
    }

    // Function to hide form
    const handleHideForm = (action: boolean) => {
        setRegistryForm(action)
        setShowForm(false) 
    }

    if (context.isLogin) {
        return (
            <Redirect to='home' noThrow />
        )
    }

    return(
        <Container>
            <ContentLeft showForm={showForm}>
                <Social />

                <div className='divContent'>

                    {   // Show illustration or form
                        !showForm
                            ? <img src={illustration} alt='Illustration' />    
                            : <Form registryForm={registryForm} setRegistryForm={setRegistryForm} />
                    }
                </div>
                
            </ContentLeft>
            <ContentRight showForm={showForm}>
                <Social />

                <div className='logo'>
                    <img src={logo} onClick={() => handleHideForm(false)} alt='Logo TidBok' />
                </div>                    

                {   // When the form is show the information is hidden and the illustration is show
                    showForm 
                        ?   // Illustration
                            <div className='illustration'>
                                <img src={illustration} alt='Illustration' />  
                            </div>
                        :   // Illustration fragment and action buttons 
                            <Fragment>
                                <div className='text'>
                                    <Typography 
                                        variant='h1' 
                                        bg='secondary'
                                    > 
                                        <React.Fragment><Span bg='primary'>Tidbok</Span> permite llevar un registro de los tiempos y progresos de los deportistas.</React.Fragment>
                                    </Typography>
                                </div>
                                <div className='buttons'>
                                    <div>
                                        <Button 
                                            className='button' 
                                            size='lg' 
                                            bg='tertiary' 
                                            text='Regítrate'
                                            onClick={() => handleShowForm(true)}
                                        />

                                        <Button 
                                            className='button'
                                            size='lg' 
                                            bg='tertiary' 
                                            variant='outlined' 
                                            text='Inicia Sesión'
                                            onClick={() => handleShowForm(false)}
                                        />
                                    </div>
                                </div>
                            </Fragment>
                }
            </ContentRight>
        </Container>
    )
}

export default Start