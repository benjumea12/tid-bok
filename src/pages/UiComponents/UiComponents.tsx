import React, { useState } from 'react'
// My components
import { Typography, Button, Modal, Input, Divider, Notifications, Span, Loading, Calendar } from '../../components'
// Images
import typography01 from '../../images/uicomponents/typography01.png'
import typography02 from '../../images/uicomponents/typography02.png'
import button01 from '../../images/uicomponents/button01.png'
import button02 from '../../images/uicomponents/button02.png'
import button03 from '../../images/uicomponents/button03.png'
import modal01 from '../../images/uicomponents/modal01.png'
import input01 from '../../images/uicomponents/input01.png'
import input02 from '../../images/uicomponents/input02.png'
import divider01 from '../../images/uicomponents/divider01.png'
import divider02 from '../../images/uicomponents/divider02.png'
import loading01 from '../../images/uicomponents/loading01.png'
import loading02 from '../../images/uicomponents/loading02.png'
import notification01 from '../../images/uicomponents/notification01.png'
import span01 from '../../images/uicomponents/span01.png'
import calendar01 from '../../images/uicomponents/calendar01.png'
// Styled componets
import { Container } from './UiComponents.styled'

const UiComponents = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md')

    return (
        <Container>
            <div className='title'>
                <Typography variant='h1' bg='primary'>
                    <React.Fragment>Componentes UI para <Span bg='secondary'>TidBok</Span></React.Fragment>
                </Typography>
            </div>
        
            <div className='border'>
                <Typography variant='h3' bg='primary'>Componente Typography</Typography>
                <div className='space' />
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Variantes</Typography>
                        <div className="tab">
                            <Typography variant='h1'>Titulo H1</Typography>
                            <Typography variant='h2'>Titulo H2</Typography>
                            <Typography variant='h3'>Titulo H3</Typography>
                            <Typography variant='h4'>Titulo H4</Typography>
                            <Typography variant='h5'>Titulo H5</Typography>
                            <Typography variant='h6'>Titulo H6</Typography>
                            <Typography variant='sub'>Subtitulo 1</Typography>
                            <Typography variant='sub2'>Subtitulo 2</Typography>
                            <Typography variant='p'>Parrafo 1. Lorem ipsum dolor sit amet</Typography>
                            <Typography variant='p2'>Parrafo 2. Lorem ipsum dolor sit amet</Typography>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={typography01} />
                    </div>
                </div>
                <br/>
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Color</Typography>
                        <div className="tab">
                            <Typography variant='h6' bg='primary'>Primary</Typography>
                            <Typography variant='h6' bg='secondary'>Secondary</Typography>
                            <Typography variant='h6' bg='tertiary'>Tertiary</Typography>
                            <div className='bg-black'>
                            <Typography variant='h6' bg='white'>white</Typography>
                            </div>
                            <Typography variant='h6' bg='black'>Black</Typography>
                            <Typography variant='h6'>Default</Typography>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={typography02} />
                    </div>
                </div>
            </div>
            
            
            
            <div className='border buttons'>
                <Typography variant='h3' bg='primary'>Componente Button</Typography>
                <div className='space'/>

                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Variantes</Typography>
                        <div className="tab">
                            <Button variant='link' text='Link' /><div className='space-sm' />
                            <Button variant='outlined' bg='secondary' text='Outlined'/><div className='space-sm' />
                            <Button variant='lined' bg='secondary' text='Lined'/><div className='space-sm' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={button01} />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Tamaños</Typography>
                        <div className="tab">
                            <Button variant='outlined' size='sm' bg='primary' text='Size sm'/><div className='space-sm' />
                            <Button variant='outlined' size='md' bg='primary' text='Size md'/><div className='space-sm' />
                            <Button variant='outlined' size='lg' bg='primary' text='Size lg'/><div className='space-sm' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={button02} />
                    </div>
                </div>   
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Color</Typography>
                        <div className="tab">
                            <Button size='sm' bg='primary' text='Primary'/><div className='space-sm' />
                            <Button size='sm' bg='secondary' text='Secondary'/><div className='space-sm' />
                            <Button size='sm' bg='tertiary' text='Tertiary'/><div className='space-sm' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={button03} />
                    </div>
                </div>               
            </div>


            <div className='border'>
                <Typography variant='h3' bg='primary'>Componente Modal</Typography>
                <div className='space' />
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Tamaños</Typography>
                        <div className="tab">

                            <Button size='sm' bg='secondary' text='Modal sm' onClick={() => {
                                setModalSize('sm')
                                setOpenModal(true)
                            }} /><div className='space-sm' />
                            <Button size='sm' bg='secondary' text='Modal md' onClick={() => {
                                setModalSize('md')
                                setOpenModal(true)
                            }} /><div className='space-sm' />
                            <Button size='sm' bg='secondary' text='Modal lg' onClick={() => {
                                setModalSize('lg')
                                setOpenModal(true)
                            }}  /><div className='space-sm' />
                            <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)} size={modalSize}>
                                <div>
                                    <Typography variant='h3' bg='primary'>
                                        <React.Fragment>Modal {modalSize}</React.Fragment>
                                    </Typography>
                                    <br />
                                    <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={modal01} />
                    </div>
                </div>
            </div>


            
            <div className='border inputs'>
                <Typography variant='h3' bg='primary'>Componente Input</Typography>
                <div className='space' />

                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Variantes</Typography>
                        <div className="tab">
                            <Input placeholder='Input con borde' border={true}/>
                            <div className='bg-secondary'>
                                <Input placeholder='Input sin borde' border={false}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={input01} />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>input error</Typography>
                        <div className='tab'>
                            <Input placeholder='Input con borde' message='Mensaje de error' error={true} value='Input de error' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={input02} />
                    </div>
                </div>
            </div>



            <div className='border'>
                <Typography variant='h3' bg='primary'>Componente Divider</Typography>
                <div className='space' />

                <div className='flex'>
                    <div>
                        <div>
                            <Typography variant='h5' bg='black'>Horizontal</Typography>
                            <div className='tab'>  
                                <Divider width='100px' />
                            </div>
                        </div>
                        <div>
                            <Typography variant='h5' bg='black'>Vertical</Typography>
                            <div className='tab'>  
                                <Divider variant='vertical' height='50px' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={divider01} />
                    </div>
                </div>
                
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Color</Typography>
                        <div className='tab'>  
                            <Divider width='100px' marginT='15px' bg='primary' />
                            <Divider width='100px' marginT='15px' bg='secondary' />
                            <Divider width='100px' marginT='15px' bg='tertiary' />
                            <Divider width='100px' marginT='15px' bg='black' />
                            <Divider width='100px' marginT='15px' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={divider02} />
                    </div>
                </div>
            </div>


            <div className='border'>
                <Typography variant='h3' bg='primary'>Componente Loading</Typography>
                <div className='space' />

                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Tamaños</Typography>
                        <div className='tab'>  
                            <Loading size='sm' /><div className='space-sm' />
                            <Loading size='md' /><div className='space-sm' />
                            <Loading size='lg' /><div className='space-sm' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={loading01} />
                    </div>
                </div>
                
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Color</Typography>
                        <div className='tab'>  
                            <Loading size='lg' bg='primary' /><div className='space-sm' />
                            <Loading size='lg' bg='secondary' /><div className='space-sm' />
                            <Loading size='lg' bg='tertiary' /><div className='space-sm' />
                            <div className='bg-black'>
                                <Loading size='lg' bg='white' />
                            </div><div className='space-sm' />
                            <Loading size='lg' bg='black' /><div className='space-sm' />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={loading02} />
                    </div>
                </div>
            </div>




            <div className='border'>
                <Typography variant='h3' bg='primary'>Otros componentes</Typography>
                <div className='space' />

                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Notificacion</Typography>
                        <div className='tab'>  
                            <Notifications /><div className='space-sm' />
                            <Notifications beagle={true} />
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={notification01} />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <Typography variant='h5' bg='black'>Span</Typography>
                        <div className='tab'>  
                            <Typography variant='h6'>
                                <React.Fragment>
                                    Lorem <Span bg='primary'>ipsum</Span> dolor sit <Span bg='primary'>amet</Span><br />
                                    Lorem <Span bg='secondary'>ipsum</Span> dolor sit <Span bg='secondary'>amet</Span><br />
                                    Lorem <Span bg='tertiary'>ipsum</Span> dolor sit <Span bg='tertiary'>amet</Span><br />
                                    <div className='bg-black'>
                                    Lorem <Span bg='white'>ipsum</Span> dolor sit <Span bg='white'>amet</Span>
                                    </div>
                                    Lorem <Span bg='black'>ipsum</Span> dolor sit <Span bg='black'>amet</Span>
                                </React.Fragment>
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <img alt="img UI components" src={span01} />
                    </div>
                </div>
            </div>

            <div className='border'>
                <Typography variant='h3' bg='primary'>Componente Calendar</Typography>
                <div className='space-sm' />
                <Typography variant='sub' bg='black'>Calendario totalmente funcional y personalizado</Typography>
                <div className='space' />

                <div>
                    <Calendar>
                        <Typography variant='h6'>*Contenido extra*</Typography>
                    </Calendar>
                </div><div className='space' />
                <div className='flex'>
                    <div>
                    <img alt="img UI components" src={calendar01} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UiComponents