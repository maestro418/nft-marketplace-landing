import { useState,useContext,createContext,useMemo } from "react";

interface State {
    socialList:Object,
    navList:Object
}
type GlobalData = State;

export const GlobalData = createContext<GlobalData|undefined>(undefined);

export const useGlobalData = () => {
    const context  = useContext(GlobalData);
     if (!context) {
        return ('Must match context data')
     }
     return context;
}
const init_State:State  = {
    socialList:[
        {
            icon: 'Website',
            link: '/'
          },
          {
            icon: 'Discord',
            link: '/'
          },
          {
            icon: 'Youtube',
            link: '/'
          },
          {
            icon: 'Twitter',
            link: '/'
          },
          {
            icon: 'Instagram',
            link: '/'
          }
    ],
    navList:[
        {
            label: 'Marketplace',
            link: '/marketplace'
          },
          {
            label: 'Rankings',
            link: '/rankings'
          },
    ]
}

interface ProviderProp {
    children:React.ReactNode
}

const Provider:React.FC<ProviderProp> = ({children}) => {
    const state = init_State
    return (
        <GlobalData.Provider 
            //@ts-ignore
        value={useMemo(()=>[state],[state])}>
            {children}
        </GlobalData.Provider>
    )
}

export default Provider