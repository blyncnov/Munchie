import React from 'react'

import Bg from "../assets/png_noodle_14765.png"

import {
    TablecontentContainner,
    TablecontentColumn,

} from "../style/TableContentStyle"


const TableContent = () => {
    return (
        <div>
            <h1 style={{ color: "#383762", padding: ".5em 0" }}>Our Menu</h1>
            <TablecontentContainner >
                <TablecontentColumn >
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>                            <td>Fried Rice And Turkey</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>                            <td>Olarewaju and Pepper</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>                            <td>Noodle and Fried Egg</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>                            <td>Plantain and Egg Sauce</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>                            <td>Canadian Loud and Weed</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>
                                <img src={Bg} alt="img" width="100px" />
                            </td>
                            <td>Italy</td>
                        </tr>
                    </table>
                </TablecontentColumn>
            </TablecontentContainner>
            <br />
            <br />
        </div>
    )
}

export default TableContent