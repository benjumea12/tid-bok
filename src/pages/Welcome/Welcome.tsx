import React, { Fragment, useState } from 'react'
// Resourses
import illustration from '../../images/@1x/Illustration.png'
// My components
import { Typography, Span, Divider, Button, Modal } from '../../components'
// Styled components
import { Container } from './Welcome.styled'

const Welcome = () => {
    const [openModal, setOpenModal] = useState(false)

    return(
        <Container>
            <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)}>
                <Typography>En TidBok estamos trabajando mejorar tu experiacia cada día</Typography>
            </Modal>
            <div className='title'>
                <Typography variant='h1' bg='primary'>
                    <Fragment>Bienvenido a <Span bg='secondary'>TidBok</Span></Fragment>
                </Typography>
            </div>
            <div className='content'>
                <div className='card'>
                    <Typography variant='h5' bg='secondary'>Resumen</Typography>

                    <div className='values'>
                        <div>
                            <Typography variant='h6' bg='black'>10</Typography>
                            <Typography variant='p'>Deportistas</Typography>
                        </div>
                        <Divider variant='vertical' height='45px' />
                        <div>
                            <Typography variant='h6' bg='black'>6</Typography>
                            <Typography variant='p'>Recorridos</Typography>
                        </div>
                        <Divider variant='vertical' height='45px' />
                        <div>
                            <Typography variant='h6' bg='black'>9</Typography>
                            <Typography variant='p'>Tiempos</Typography>
                        </div>
                    </div>

                    <div className='last-times'>
                        <Typography variant='sub2' bg='primary'>Ultimos tiempos</Typography>

                        <div className='time'>
                            <Typography variant='p' bg='black'>Marsella - La oriental</Typography>
                            <Typography variant='p'>25/03/2020</Typography>
                            <Typography variant='p'>11 km</Typography>
                            <Button className='link' variant='link' text='ver' />
                        </div>  
                        <div className='time'>
                            <Typography variant='p' bg='black'>Marsella - La oriental</Typography>
                            <Typography variant='p'>25/03/2020</Typography>
                            <Typography variant='p'>11 km</Typography>
                            <Button className='link' variant='link' text='ver' />
                        </div>  
                        <div className='time'>
                            <Typography variant='p' bg='black'>Marsella - La oriental</Typography>
                            <Typography variant='p'>25/03/2020</Typography>
                            <Typography variant='p'>11 km</Typography>
                            <Button className='link' variant='link' text='ver' />
                        </div>  
                    </div>
                </div>
                <div className='illustration'>
                    <img src={illustration} alt="illustration" /><br />
                    <Button className='button' size='lg' bg='tertiary' text='Ver mi agenda' />
                </div>
            </div>
        </Container>
    )
}

export default Welcome