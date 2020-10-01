import React, { useContext } from 'react'
// My components
import { Navigation } from '../../components'
// Pages
import Runners from '../../pages/Runners'
import Trails from '../../pages/Trails'
import Times from '../../pages/Times'
import Welcome from '../../pages/Welcome'
// Reach router
import { Router, RouteComponentProps, Redirect } from '@reach/router'
// Context
import MyContext from '../../context'
// Routes
const RunnersPage = (props: RouteComponentProps) => <Runners />
const TrailsPage = (props: RouteComponentProps) => <Trails />
const TimesPage = (props: RouteComponentProps) => <Times />
const WelcomePage = (props: RouteComponentProps) => <Welcome />

interface IPropsHome {
    children?: JSX.Element
}

const Home = (props: IPropsHome) => {
    // Context
    const context = useContext(MyContext)

    if (!context.isLogin) {
        return (
            <Redirect to='/' noThrow />
        )
    }

    return (
            <Navigation> 
                <Router>
                    <WelcomePage path='/'/>
                    <RunnersPage path='/runners' />
                    <TrailsPage path='/trails' />
                    <TimesPage path='/times' />
                </Router>
            </Navigation>
    )
}

export default Home
