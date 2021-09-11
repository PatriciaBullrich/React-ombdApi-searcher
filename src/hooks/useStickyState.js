import {useState, useEffect}  from  'react';

export const useStickyState = (defaultValue, key) =>{
    const [value,setValue] = useState(() => {
        const storedValue = localStorage.getItem((key));
        return storedValue !== null ? JSON.parse(storedValue): defaultValue;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value,key]);
    
    return [value, setValue];
}
