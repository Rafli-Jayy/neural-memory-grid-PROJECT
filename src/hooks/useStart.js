import { useState } from 'react'
import { emojiThemes } from '../data/themes'


export default function useCard(){
    const [theme, setTheme] = useState('cyber-cyber');
    const [mode, setMode] = useState('');

    const onThemeChange= (id) => {
        setTheme(id)
    }
    
    return {
        theme,
        onThemeChange
    }
}