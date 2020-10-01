import React, { useState, useEffect } from 'react'
// Pages
import Start from './pages/Start'
import Home from './pages/Home'
import UiComponents from './pages/UiComponents'
// My context
import MyContext, { IDefaultContext } from './context'
// Reach router
import { Router, RouteComponentProps } from '@reach/router'
// Routes
const StartPage = (props: RouteComponentProps) => <Start />
const HomePage = (props: RouteComponentProps) => <Home />
const UiComponentsPage = (props: RouteComponentProps) => <UiComponents />

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const appContext: IDefaultContext = {
    isLogin, 
    setIsLogin: (value: boolean) => setIsLogin(value)
  }

  useEffect(() => {    
    //console.log(`is login`, isLogin)
  }, [isLogin])

  /*if (isLogin) {
    return <Redirect to='home/*' noThrow />
  }*/

  return (
    <MyContext.Provider value={appContext}>
      <Router>
        <StartPage path='/'/>
        <HomePage path='home/*' />
        <UiComponentsPage path='ui' />
      </Router>
    </MyContext.Provider>
  )
}

export default App