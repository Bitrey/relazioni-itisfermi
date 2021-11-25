import "./App.css";
import { Card, Table } from "antd";
const { Column } = Table;

const data = [
    {
        key: 1,
        device: "R1",
        interface: "ether1",
        ip: "192.168.1.1/24",
        dg: "192.168.1.254"
    },
    {
        key: 2,
        device: "R1",
        interface: "ether2",
        ip: "192.168.1.2/24",
        dg: "192.168.1.254"
    },
    {
        key: 3,
        device: "R2",
        interface: "ether1",
        ip: "172.20.1.1/24",
        dg: "172.20.1.254"
    }
];

function App() {
    return (
        <div className="app flex flex-col items-center bg-gray-100 min-h-screen py-4">
            <div className="w-3/5 p-12 bg-white min-h-screen rounded-lg">
                <div className="flex justify-between text-gray-600">
                    <p>ITIS Fermi</p>
                    {/* <p>Relazione tecnica di Ciro Esposito</p> */}
                    {/* <p>Corso di telecomunicazioni</p> */}
                    <p>A.S. 2021-2022</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <img
                            className="w-36 object-contain"
                            src="/img/fermi.png"
                            alt="Fermi logo"
                        />
                        <div className="ml-12 flex flex-col">
                            <p className="text-3xl font-semibold mb-1">Relazione tecnica</p>
                            {/* <p className="text-3xl font-semibold mb-1">ITIS Fermi</p> */}
                            <p className="text-gray-900 text-lg mb-0">Corso di telecomunicazioni</p>
                            {/* <p className="text-gray-900 text-lg mb-0">Corso di telecomunicazioni</p> */}
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-gray-500 mt-10 mb-8" />
                    <div className="px-4">
                        <div className="flex flex-col">
                            <p className="mb-1 text-gray-900 font-semibold">Esperienza</p>
                            <p className="text-4xl">Nome esperienza nome esperienza</p>
                        </div>
                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-col w-3/4">
                                <p className="mb-1 text-gray-900 font-semibold">Obiettivo</p>
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="mb-1 text-gray-900 font-semibold">Identificativo</p>
                                <p>Mikrotik 3</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <p className="mb-1 text-gray-900 font-semibold">Schema</p>
                            <img
                                className="object-contain w-full"
                                src="/img/schema.png"
                                alt="Schema"
                            />
                        </div>
                        <div className="flex flex-col mt-8 text-justify">
                            <p className="mb-1 text-gray-900 font-semibold">Descrizione</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                commodo cursus sapien, sit amet euismod sapien consequat vel. Morbi
                                vel est ut orci viverra facilisis. In sollicitudin scelerisque elit,
                                in euismod lorem consectetur id. Aenean sit amet consectetur purus.
                                Sed a erat facilisis, blandit magna vitae, pulvinar elit. Phasellus
                                fermentum enim at aliquam dapibus. Aenean sed ex ut diam tristique
                                fringilla id nec lorem. Curabitur dignissim enim ac augue pretium
                                volutpat. Morbi ex neque, malesuada at leo eu, cursus suscipit
                                mauris. Quisque vel posuere risus. Morbi ac nibh in lectus
                                pellentesque eleifend ornare vitae turpis.
                            </p>
                            <p>
                                Donec sit amet ullamcorper lorem. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
                                pretium, ex eget efficitur efficitur, neque tellus vulputate sem,
                                aliquet maximus nisi tellus eget nisi. Nam posuere id enim a tempor.
                                Integer tempus ornare justo nec suscipit. Quisque ac felis quis dui
                                eleifend tristique. Sed eget mauris eros. Suspendisse vitae quam
                                augue. Pellentesque est risus, viverra ornare ligula eget, vehicula
                                imperdiet dui.
                            </p>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div className="flex flex-col">
                                <p className="mb-3 text-gray-900 font-semibold">
                                    Servizi attivi su R2
                                </p>

                                <div className="grid grid-cols-3">
                                    <Card title="DHCP" bordered={true}>
                                        Sono il DHCP
                                    </Card>
                                    <Card title="DHCP" bordered={true}>
                                        Sono il DHCP
                                    </Card>
                                    <Card title="DHCP" bordered={true}>
                                        Sono il DHCP
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-8">
                            <p className="mb-3 text-gray-900 font-semibold">
                                Tabella degli indirizzi
                            </p>
                            <Table dataSource={data} pagination={false}>
                                <Column title="Device" dataIndex="device" key="device" />
                                <Column title="Interface" dataIndex="interface" key="interface" />
                                <Column title="IP" dataIndex="ip" key="ip" />
                                <Column title="Default gateway" dataIndex="dg" key="dg" />
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
