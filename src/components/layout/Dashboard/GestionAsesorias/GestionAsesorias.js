import React from 'react';

const GestionAsesorias = () => {
    return (
        <div className="contenedor-asesorias">
            <h1>Empresa: <span>Empresa 1</span></h1>
            <div className="estadisticas">
                <div>
                    <p>Cantidad Asesorias: 10</p>
                </div>

                <div>
                    <p>Cantidad Accidentes: 0</p>
                </div>
            </div>

            <div className="form-asesoria">
            
                <form>
                    <h2>Añadir Asesoría</h2>
                    <div className="radio-buttons">
                    
                        <div className="asesoria-fields">
                        <input
                            type="radio"
                            id="accidente"
                            name="asesoria"
                        />

                        <label htmlFor="asesoria">Asesoría</label>
                        </div>

                        <div className="asesoria-fields">
                        <input
                            type="radio"
                            id="fiscalizacion"
                            name="asesoria"
                        />

                        <label htmlFor="fiscalizacion">Fiscalización</label>
                        </div>
                    </div>

                    <div className="cuerpo-asesoria">
                        <div className="campo-asesoria">
                            <label>Documento Fiscalización</label>
                            <input
                                type="file"
                            />
                        </div>

                        <div className="campo-asesoria">
                            <label>Fecha Fiscalización</label>
                            <input
                                type="date"
                            />
                        </div>

                        <div className="campo-asesoria">
                            <label>Tipo Fiscalización</label>
                            <select>
                                <option value="default">--Seleccione--</option>
                                <option value="value1">Opcion 1</option>
                                <option value="value2">Opcion 2</option>
                            </select>
                        </div>

                        <input type="submit" value="Guardar Asesoría"></input>
                    </div>
                </form>
            </div>
            
            
        </div>
    )
}

export default GestionAsesorias;
