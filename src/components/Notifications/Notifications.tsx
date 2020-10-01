import React from 'react'
// Styled components
import { NotificationButton } from './Notifications.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

interface INotifications {
    beagle?: boolean | false
}

type NotificationsProps =  INotifications & React.HTMLAttributes<HTMLDivElement>

const Notifications = (props: NotificationsProps): JSX.Element => {
    const { beagle } = props

    const handleClick = () => {
        console.log('click')
    }

    return (
        <NotificationButton>
            <div className='button' onClick={handleClick}>
                <FontAwesomeIcon icon={faBell} size='1x' color='white'/>
            </div>
            { beagle && <div className='beagle' /> }
        </NotificationButton>
    )
}

export default Notifications