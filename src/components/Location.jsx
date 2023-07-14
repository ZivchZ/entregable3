import { useState, useEffect } from "react"
import axios from "axios"

const Location = ({info}) => {

    return(
        <>
                <h3>Nombre: <br /><br />{info.name}</h3>
                <h3>Tipo:<br /><br />{info.type}</h3>
                <h3>Dimensión:<br /><br />{info.dimension}</h3>
                <h3>Población:<br /><br />{info.residents?.length}</h3>
        </>
    )
}

export default Location