import "./App.css";
import ReactToPdf from "react-to-pdf";
import Report from "./components/Report";
import { createRef } from "react";

const ref = createRef();

const activeServices = [
    {
        title: "DHCP",
        description: "si sono proprio io il DHCP"
    },
    {
        title: "NAT",
        description: "che schifo"
    }
];
const addressingTable = [
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

const description =
    "Aliquam sed vestibulum sapien. Sed sagittis aliquet hendrerit. Maecenas vel vehicula risus. Donec a velit pretium, congue lorem quis, sagittis ex. Curabitur non vulputate lectus, sed rhoncus nisi. Aliquam luctus, neque nec vehicula hendrerit, leo dolor rutrum turpis, vitae consequat risus lectus vel dui. Maecenas a metus libero. Fusce accumsan sodales felis, ac tempus turpis molestie at. Pellentesque mollis, odio ut placerat scelerisque, nunc lectus elementum sapien, nec euismod turpis arcu nec nibh. Nunc et tellus risus. Nulla at ante vitae nibh viverra egestas quis placerat sem. Phasellus a lacus pharetra turpis interdum congue sit amet at justo. Phasellus bibendum libero nec nunc consequat pharetra. Integer semper vulputate magna, ut rutrum risus euismod eget. Suspendisse eleifend pellentesque eros, quis efficitur lectus accumsan eu. Fusce lacinia sollicitudin nulla, ut ornare est cursus vel.";

const objective = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a volutpat nunc.";

function App() {
    return (
        <>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
            </ReactToPdf>

            <Report
                activeServices={activeServices}
                addressingTable={addressingTable}
                description={description}
                objective={objective}
                schemaImg="/img/schema.png"
                shortName="mkTik3"
                title="Mikrotik 3 prova prova"
                ref={ref}
            />
        </>
    );
}

export default App;
