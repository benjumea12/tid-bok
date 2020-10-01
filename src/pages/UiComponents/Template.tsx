import React, { useState } from 'react'
import { Typography, Button, Modal, Input, Divider, Notifications, Loading, Span, Calendar } from '../../components'

const Template = () => {


    const [openModal, setOpenModal] = useState(false)

    

    return( 
        <React.Fragment>

            <Typography variant='h1'>Titulo H1</Typography>
            <Typography variant='h2'>Titulo H2</Typography>
            <Typography variant='h3'>Titulo H3</Typography>
            <Typography variant='h4'>Titulo H4</Typography>
            <Typography variant='h5'>Titulo H5</Typography>
            <Typography variant='h6'>Titulo H6</Typography>
            <Typography variant='sub'>Subtitulo 1</Typography>
            <Typography variant='sub2'>Subtitulo 2</Typography>
            <Typography variant='p'>Parrafo 1</Typography>
            <Typography variant='p2'>Parrafo 2</Typography>
            

            <Typography variant='h6' bg='primary'>Primary</Typography>
            <Typography variant='h6' bg='secondary'>Secondary</Typography>
            <Typography variant='h6' bg='tertiary'>Tertiary</Typography>
            <Typography variant='h6' bg='white'>white</Typography>
            <Typography variant='h6' bg='black'>Black</Typography>
            <Typography variant='h6'>Default</Typography>


            <Button variant='link' bg='secondary' text='Link'/>
            <Button variant='outlined' bg='secondary' text='Outlined'/>
            <Button variant='lined' bg='secondary' text='Lined'/>


            <Button variant='outlined' size='sm' bg='primary' text='Size sm'/>
            <Button variant='outlined' size='md' bg='primary' text='Size md'/>
            <Button variant='outlined' size='lg' bg='primary' text='Size lg'/>


            
            <Button size='sm' bg='primary' text='Primary'/>
            <Button size='sm' bg='secondary' text='Secondary'/>
            <Button size='sm' bg='tertiary' text='Tertiary'/>



            <Input placeholder='Input con borde' border={true}/>
            <Input placeholder='Input sin borde' border={false}/>



            <Input 
                message='Mensaje de error' 
                error={true} 
                value='Input de error'
            />



            <Divider variant='horizontal' width='100px' />
            <Divider variant='vertical' height='50px' />


            <Divider width='100px' bg='primary' />
            <Divider width='100px' bg='secondary' />
            <Divider width='100px' bg='tertiary' />
            <Divider width='100px' bg='black' />
            <Divider width='100px' />



            <Loading size='sm' />
            <Loading size='md' />
            <Loading size='lg' />



            <Loading size='lg' bg='primary' />
            <Loading size='lg' bg='secondary' />
            <Loading size='lg' bg='tertiary' />
            <Loading size='lg' bg='white' />
            <Loading size='lg' bg='black' />



            <Notifications />
            <Notifications beagle={true} />


            Lorem <Span bg='primary'>ipsum</Span> dolor
            Lorem <Span bg='secondary'>ipsum</Span> dolor
            Lorem <Span bg='tertiary'>ipsum</Span> dolor
            Lorem <Span bg='white'>ipsum</Span> dolor
            Lorem <Span bg='black'>ipsum</Span> dolor



            <Calendar>
                <Typography variant='h6'>*Contenido extra*</Typography>
            </Calendar>


        </React.Fragment>
    )
}

export default Template