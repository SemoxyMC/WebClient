import React, {useContext, useEffect, useState} from "react";
import {Config, getConfig} from "../services/config";

interface ConfigContextProps {
    config: Config
}

const ConfigContext = React.createContext<ConfigContextProps>({
    config: {
        javaVersions: {},
        maxRam: 0,
        publicIP: "127.0.0.1"
    }
})

export const ConfigProvider: React.FC = ({children}) => {
    const [config, setConfig] = useState<Config>({
        javaVersions: {},
        maxRam: 0,
        publicIP: "127.0.0.1"
    });
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        getConfig().then(c => {
            setConfig(c)
            setFetched(true)
        })
    }, [])

    return <ConfigContext.Provider value={{config}}>
        { fetched && children }
    </ConfigContext.Provider>
}

export function useConfig() {
    return useContext(ConfigContext)
}

export default ConfigContext
