import React, { useState } from 'react'
// Resourses 
import Unnamed from '../../images/@1x/unnamed.png'
// My components
import { 
    Typography,
    Button,
    Input,
    Divider,
    Modal
 } from '../../components'
// Styled components
import { ContentPage } from './Runners.styled'
import { Header } from '../Home/Home.styled'

const Runners = () => {
    const [openModal, setOpenModal] = useState(false)
    const runners = [1,2,3,4,5,6,7,8,9,10]

    return (
        <React.Fragment>
            <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)} />
            <Header>
                <Typography variant='h1' bg='primary'>Corredores</Typography>
                <div className='actions'>
                    <Button bg='tertiary' size='md' text='Nuevo corredor' onClick={() => setOpenModal(true)} />
                    <Input className='buscar' placeholder='Buscar' width='200px' border={true} />
                </div>
            </Header>
            <ContentPage user={Unnamed}>
                { runners.map((runner) => (
                    <div className='card' key={runner}>
                        <div className='user'>
                            {/* <img className='user' src={Unnamed} alt='User' /> */}
                        </div>
                        <Typography variant='sub2' bg='black'>Esteban Benjumea Catrillon</Typography>
                        <div className='info'>
                            <Typography variant='p'><React.Fragment>19<br/>años</React.Fragment></Typography>
                            <Divider variant='vertical' height='15px' />
                            <Typography variant='p'><React.Fragment>10<br/>tiempos</React.Fragment></Typography>
                        </div>
                        <Button variant='link' text='Ver' />
                    </div>
                )) }
            </ContentPage>
        </React.Fragment>
    )
}

export default Runners