import { clientStatus } from "../../data/data";
import DataTable from "../../components/data-table";
import { columns }  from "./columns";

export default function Page(){
    const data = clientStatus
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}