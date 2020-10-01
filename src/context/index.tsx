import React from 'react'

export interface IDefaultContext {
    isLogin: boolean
    setIsLogin: Function 
}

const MyContext =  React.createContext<IDefaultContext>({
    isLogin: false, 
    setIsLogin: () => false
  });
  
export default MyContext