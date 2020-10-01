import React, { useState, useContext } from 'react'
// My components
import { Typography, Span, Button, Input, Divider, Modal } from '../../components'
// Styled components
import { FormStyled } from './Form.styled'
// Context
import MyContext from '../../context'

// Interfaces
interface IFormProps {
    registryForm: boolean
    setRegistryForm: Function
}

const Form = (props: IFormProps) => {
    // Props destructuring
    const { registryForm, setRegistryForm } = props

    // Context
    const context = useContext(MyContext)

    // State to changing form 
    const [isChanging, setChanging] = useState<boolean>(false)

    // Initial form values ​​
    // const deafaultStateInput = {value: '', error: false, message: '' }
    const [email, setEmail] = useState({value: 'benju@mail.com', error: false, message: '' })
    const [password, setPassword] = useState({value: 'ebc300', error: false, message: '' })

    // Modal state
   const [openModal, setOpenModal] = useState(false)

    // Function for changing forms
    const handleSetRegistryForm = (action: boolean) => {
        setChanging(true)

        // Initialize state of inputs
        //setEmail(deafaultStateInput)
        //setPassword(deafaultStateInput)        

        //Time delay for animation
        setTimeout(() => { 
            setRegistryForm(action) 
            setChanging(false)
        }, 50)
    }

    // Function for changing form values
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        switch (ev.target.name) {
            case 'email':
                setEmail({ ...email, value: ev.target.value, error: false })
                break;
            case 'password':
                setPassword({ ...password, value: ev.target.value, error: false })
                break;
        }
    }

    // Function for form validation
    const formValidation = () => {
        var validate = true
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        // Condicional for email validation
        if (!emailRegex.test(email.value)) { 
            validate = false
            setEmail({ ...email, error: true, message: 'Ingrese un email válido'}) 
        }
        
        // Condicional for password validation
        if (password.value === '') {
            validate = false
            setPassword({ ...email, error: true, message: 'Ingrese una contraseña válida'}) 
        } else if (password.value.length < 6) {
            validate = false
            setPassword({ ...password, error: true, message: 'La contraseña debe tener mas de 5 caracteres'})
        }

        if(registryForm && validate) {
            setOpenModal(true)
        }

        if(!registryForm && validate) {
            context.setIsLogin(true)
        }
    }

    return (
        <FormStyled isChanging={isChanging}>
            <Modal 
                size='sm'
                openModal={openModal} 
                onCloseModal={() => setOpenModal(false)} 
            >
                <React.Fragment>
                <Typography variant='h2' bg='primary'>
                    <React.Fragment>Ya estas registrado en <Span bg='secondary'>Tidbok</Span></React.Fragment>
                </Typography>    <br />
                <Button 
                    className='actionBtn' 
                    bg='tertiary' 
                    size='lg'
                    variant='outlined'
                    text='Inicia sesion'
                    onClick={() => {
                        handleSetRegistryForm(false)
                        setOpenModal(false)
                    }}
                />
                </React.Fragment>
            </Modal>

            <Typography variant='h1' bg='primary' className='title' >
               { registryForm ? 'Regístrate' : 'Incia Sesión' } 
            </Typography>

            <Typography variant='p' bg='primary' className='text'>
                Con tu cuenta de
            </Typography>

            <div className='acounts'>
                <a className='acount facebook-button'>FaceBook</a>
                <a className='acount google-button'>Google</a>
            </div>

            <Typography variant='p' bg='primary' className='text'>
                O con tu correo electrónico
            </Typography>

            <div className='inputs'>
                <Input 
                    placeholder='Correo electrónico' 
                    width='90%' 
                    name='email'
                    border={true}
                    error={email.error}
                    message={email.message}
                    value={email.value}
                    onChange={handleChange}
                />
                <Input 
                    placeholder='Contraseña' 
                    width='90%'
                    type='password' 
                    name='password'
                    border={true}
                    error={password.error}
                    message={password.message}
                    value={password.value}
                    onChange={handleChange}
                />
            </div>

            <Button 
                className='actionBtn' 
                bg='tertiary' 
                text={ registryForm ? 'Regístrarme' : 'Inciar Sesión' } 
                onClick={formValidation}
            />

            { registryForm 
                ?   <Typography variant='p' bg='primary' className='text'>
                        <React.Fragment>¿Ya tienes cuenta? genial, <Span bg='secondary' className='pointer' onClick={() => handleSetRegistryForm(false)}>inicia sesíon</Span></React.Fragment>
                    </Typography>
                :   <Typography variant='p' bg='primary' className='text'>
                        <React.Fragment>¿Eres nuevo? genial, <Span bg='secondary' className='pointer' onClick={() => handleSetRegistryForm(true)}>regístrate</Span></React.Fragment>
                    </Typography>
            }

            <Divider marginT='15px'/>

            { registryForm 
                ?   <Typography variant='p' bg='primary' className='text'>
                        <React.Fragment>Al regitrarte en TidBok estas <br />aceptando los <Span bg='secondary'>terminos del servicio</Span>. <br />
                        Consulta nuestras <Span bg='secondary'>politicas de privacidad</Span>.</React.Fragment>
                    </Typography>
                :   <Typography variant='p' bg='secondary' className='text'>
                        ¿Olvidaste tu contrseña?
                    </Typography>
            }
        </FormStyled>
    )
}

export default Form
