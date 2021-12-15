

import { Table } from "reactstrap";

const TableCustom = (props: any) => {
    return <Table striped>
        <thead>
            <tr>
                <th>
                    No
                </th>
                <th>
                    Nama Kain
                </th>
                <th>
                    Harga
                </th>
                <th>
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                    return <tr>
                        <th scope="row">
                            {item}
                        </th>
                        <td>
                            Sutra
                        </td>
                        <td>
                            Rp. 25.000
                        </td>
                        <td>
                            Tersedia
                        </td>
                    </tr>
                })
            }

        </tbody>
    </Table>
}

export default TableCustom;
