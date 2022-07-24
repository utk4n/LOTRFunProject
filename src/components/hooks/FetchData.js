import { useState, useCallback } from "react";

const useFirebase = () => {

    const [data, setData] = useState({})

    const fetcher = useCallback( async (apiUrl) => {
        const grabDatas = await fetch(apiUrl).then(res => res.json()).then(data => data).catch(error => console.log(error))
        setData(grabDatas)
    },[])

return{
    data,
    fetcher
}

}



export default useFirebase;