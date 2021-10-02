import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <Link to={`/dashboard/add-user`}>Agregar Usuario</Link>
            <Link to={`/dashboard/add-contract`}>Agregar Contrato</Link>
        </>
    )
}

export default SideBar;
