import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
    page:{
        display: 'flex',
        backgroundColor:'#1F4172',
        color: 'white'
    },

    section:{
        margin: 20,
        padding: 20,
        textAlign:'justify',
        fontSize:12,
        lineHeight:2
    },

    title:{
        fontWeight:'bold',
        backgroundColor:'white',
        color: 'black',
        textAlign:'center',
        height: 40
    }
});

const PDFContrato = (props) => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.title}>Comprobante Contrato</Text>
                </View>
                <View style={styles.section}>
                    <Text>Por medio de la plataforma online de "No + Accidentes", a {moment().format('dddd')} {moment().format("MMM Do YY") } de {moment().format('YYYY')},cuya empresa es "No más accidentes" representada por don VICENTE AMIGO en su calidad de GERENTE DE PROYECTOS, se ha convenido el siguiente contrato.
                        El trabajador con RUN {props.statePDF.run_funcionario} se compromete y obliga a ejecutar el trabajo de GESTIÓN DE PREVENCIÓN DE RIEGOS al usuario con RUN {props.statePDF.run}.
                        Los servicios se prestarán la ubicación de la empresa sin perjuicio de la facultad del empleador de alterar, por causa justificada, la naturaleza de los servicios, o el sitio o recinto en que ellos han de prestarse, con la sola limitación de que se trate de labores similares y que el nuevo sitio o recinto quede dentro de la misma localidad o ciudad, conforme a lo señalado en el artículo 12º del Código del Trabajo.
                        La jornada de trabajo será veraible dependiendo de las distintas actividades que el cliente solicite. El tiempo de media hora para colación será de cargo del trabajador .
                        El monto comprometido para los servicios que entrega el  de ${props.statePDF.monto_servicio} que será liquidado y pagado de forma mensual, como se podrá consultar más adelante.
                        El trabajador se compromete y obliga expresamente a cumplir las instrucciones que le sean impartidas por su jefe inmediato o por la gerencia de la empresa, en relación a su trabajo, y acatar en todas sus partes las normas del Reglamento Interno de Orden, Higiene y Seguridad, las que declara conocer y que forman parte integrante del presente contrato, reglamento del cual se le entrega un ejemplar.
                        El presente contrato durará hasta el {props.statePDF.fecha_fin_contrato} y sólo podrá ponérsele término en conformidad a la legislación vigente.
                        Se deja constancia que el usuario ingresó al servicio del funcionario el {moment().format()} 
                        El presente contrato se firma en 1 ejemplar, declarando el trabajador haber recibido en este acto un ejemplar de dicho instrumento, que es el fiel reflejo de la relación laboral convenida.
                    </Text>
                   
                        <Text>Firma Gerente ____________________






                        Firma Cliente ____________________
                        </Text>
                      
                </View>             
            </Page>
        </Document>
    )
}

export default PDFContrato
