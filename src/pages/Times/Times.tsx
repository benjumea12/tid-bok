import React, { Fragment } from 'react'
// My components
import { Calendar, Typography, Button, Input } from '../../components'
// Styled components
import { Header } from '../Home/Home.styled'
import { Container } from './Times.styled'

const Times = () => {
    return(
        <Fragment>
            <Header>
                <Typography variant='h1' bg='primary'>Tiempos</Typography>
                <div className='actions'>
                    <Button bg='tertiary' size='md' text='Nuevo tiempo' />
                    <Input className='buscar' placeholder='Buscar' width='200px' border={true} />
                </div>
            </Header>
            <Container>
                <Calendar>
                    <Fragment>
                        <Typography variant='sub'><Fragment><b>Nota</b>: pon tu mouse sobre un tiempo para ver mas detalles:</Fragment></Typography>
                        <div className='row'>
                            <div className='time-i' /><Typography variant='sub'>Tiempos individules</Typography>
                        </div>
                        <div className='row'>
                            <div className='time-g' /><Typography variant='sub'>Tiempos Grupales</Typography>
                        </div><br />
                        <Button variant='outlined' size='md' bg='tertiary' text='Lista de tiempos' />
                    </Fragment>
                </Calendar>
            </Container>
        </Fragment>
    )
}

export default Times