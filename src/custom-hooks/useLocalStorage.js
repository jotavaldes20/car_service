import { useState } from "react";

export function useLocalStorage(key, initialValue){
    const [storedValue, setStoreValue]=useState(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(err){
            return initialValue;
        }
    });

    const setValue = (value) =>{
        try{
            setStoreValue(value);
            window.localStorage.setItem(key,JSON.stringify(value));
        } catch(err){
            console.error(err);
        }
    };

    return [storedValue, setValue]
}