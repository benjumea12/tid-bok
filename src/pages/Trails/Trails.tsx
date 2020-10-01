import React, { useState } from 'react'
// Resourses 
import Unnamed from '../../images/@1x/unnamed.png'
// My components
import { Typography, Button, Input, Modal } from '../../components'
// Styled components
import { ContentPage } from './Trails.styled'
import { Header } from '../Home/Home.styled'

const Trails = () => {
    const [openModal, setOpenModal] = useState(false)
    const Trails = [1,2,3,4,5,6,7,8,9,10]

    return (
        <React.Fragment>
            <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)} />
            <Header>
                <Typography variant='h1' bg='primary'>Recorridos</Typography>
                <div className='actions'>
                    <Button bg='tertiary' size='md' text='Nuevo recorrido' onClick={() => setOpenModal(true)} />
                    <Input className='buscar' placeholder='Buscar' width='200px' border={true} />
                </div>
            </Header>
            <ContentPage user={Unnamed}>
                { Trails.map((runner) => (
                    <div className='card' key={runner}>
                        <Typography variant='sub2' bg='black'>La oriental</Typography>
                        <div className='info'>
                            <Typography variant='p'>6 km</Typography>
                            <Typography variant='p'>10 tiempos</Typography>
                        </div>
                        <Button className='link' variant='link' text='Ver' />
                    </div>
                )) }
            </ContentPage>
        </React.Fragment>
    )
}

export default Trails