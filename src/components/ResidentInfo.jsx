import { useState, useEffect } from "react"
import axios from "axios"

const ResidentInfo = ({url}) => {

    const [data, setData] = useState({})

    useEffect(() => {

        axios
        .get(url)
        .then(resp => {
            console.log(resp.data)
            setData(resp.data)
        })
        .catch(error => console.error(error))
    }, [])

    return(
        <>

            <li className="resident-info">
            <div className="status">
            {
            data?.status === "Alive" 
            ? <div className="alive"></div>
            : data?.status === "Dead" 
            ? <div className="dead"></div> : 
            <div className="unknown"></div>
            }
            <h3>{data?.status}</h3>
            </div>
                <img src={data?.image} alt="" />
                <h2>{data?.name}</h2>
                <p>Especie: {data?.species}</p>
                <p>Origen: {data?.origin?.name}</p>
                <p>Apariciones: {data.episode?.length}</p>
            </li>

        </>
    )
}

export default ResidentInfo