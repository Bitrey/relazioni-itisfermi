import React from "react";
import { Card, Table } from "antd";

const { Column } = Table;

// /**
//  * @typedef {Object} Report
//  * @property {string} [school]
//  * @property {string} [year]
//  * @property {string} mainTitle
//  * @property {string} [course]
//  * @property {string} title
//  * @property {string} objective
//  * @property {string} shortName
//  * @property {string} description
//  * @property {string} schemaImg
//  * @property {{title: string, description: string}[]} [activeServices]
//  * @property {{device: string, interface: string, ip: string, dg: string}[]} [addressingTable]
//  */

/**
 * Report component.
 * @param {object} props
 * @param {string} [props.school]
 * @param {string} [props.year]
 * @param {string} [props.mainTitle]
 * @param {string} [props.course]
 * @param {string} props.title
 * @param {string} props.objective
 * @param {string} props.shortName
 * @param {string} props.description
 * @param {string} props.schemaImg
 * @param {{title: string, description: string}[]} props.activeServices
 * @param {{device: string, interface: string, ip: string, dg: string}[]} props.addressingTable
 */
const Report = ({
    school,
    year,
    mainTitle,
    course,
    title,
    objective,
    shortName,
    description,
    schemaImg,
    activeServices,
    addressingTable
}) => {
    return (
        <div className="app flex flex-col items-center bg-gray-100 min-h-screen py-4">
            <div className="w-3/5 p-12 bg-white min-h-screen rounded-lg">
                <div className="flex justify-between text-gray-600">
                    <p>{school || "ITIS Fermi"}</p>
                    {/* <p>Relazione tecnica di Ciro Esposito</p> */}
                    {/* <p>Corso di telecomunicazioni</p> */}
                    <p>{year || "A.S. 2021-2022"}</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <img
                            className="w-36 object-contain"
                            src="/img/fermi.png"
                            alt="Fermi logo"
                        />
                        <div className="ml-12 flex flex-col">
                            <p className="text-3xl font-semibold mb-1">
                                {mainTitle || "Relazione tecnica"}
                            </p>
                            {/* <p className="text-3xl font-semibold mb-1">ITIS Fermi</p> */}
                            <p className="text-gray-900 text-lg mb-0">
                                {course || "Corso di telecomunicazioni"}
                            </p>
                            {/* <p className="text-gray-900 text-lg mb-0">Corso di telecomunicazioni</p> */}
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-gray-500 mt-10 mb-8" />
                    <div className="px-4">
                        <div className="flex flex-col">
                            <p className="mb-1 text-gray-900 font-semibold">Esperienza</p>
                            <p className="text-4xl">{title}</p>
                        </div>
                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-col w-3/4">
                                <p className="mb-1 text-gray-900 font-semibold">Obiettivo</p>
                                <p className="text-justify">{objective}</p>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="mb-1 text-gray-900 font-semibold">Identificativo</p>
                                <p>{shortName}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <p className="mb-1 text-gray-900 font-semibold">Schema</p>
                            <img className="object-contain w-full" src={schemaImg} alt="Schema" />
                        </div>
                        <div className="flex flex-col mt-8 text-justify">
                            <p className="mb-1 text-gray-900 font-semibold">Descrizione</p>
                            {description}
                        </div>
                        {activeServices && (
                            <div className="flex flex-col mt-8">
                                <div className="flex flex-col">
                                    <p className="mb-3 text-gray-900 font-semibold">
                                        Servizi attivi
                                    </p>

                                    <div className="grid grid-cols-3">
                                        {activeServices.map((e, i) => (
                                            <Card key={i} title={e.title} bordered={true}>
                                                {e.description}
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {addressingTable && (
                            <div className="flex flex-col mt-8">
                                <p className="mb-3 text-gray-900 font-semibold">
                                    Tabella degli indirizzi
                                </p>
                                <Table dataSource={addressingTable} pagination={false}>
                                    <Column title="Device" dataIndex="device" key="device" />
                                    <Column
                                        title="Interface"
                                        dataIndex="interface"
                                        key="interface"
                                    />
                                    <Column title="IP" dataIndex="ip" key="ip" />
                                    <Column title="Default gateway" dataIndex="dg" key="dg" />
                                </Table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
