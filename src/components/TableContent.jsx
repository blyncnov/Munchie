import React from 'react'
import { motion } from 'framer-motion'

import Bg from "../assets/png_noodle_14765.png"

import {
    TablecontentContainner,
    TablecontentColumn,

} from "../style/TableContentStyle"


const TableContent = () => {
    // if (window.ethereum) {
    //     alert("You are good to go")
    // } else {
    //     console.log("metamask is not installed")
    // }
    return (
        <div>
            <h2 style={{ color: "#383762", padding: ".5em 0" }}>Our Table Menu</h2>
            <TablecontentContainner >
                <TablecontentColumn >
                    <table>
                        <tbody>
                            <tr>
                                <th>No.</th>
                                <th>Image</th>
                                <th className="alignment">Description & Price</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [-90, 0],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Fried Rice And Turkey</h4>
                                        <br />
                                        <h4>$200.00</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [360, 0],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Olarewaju and Pepper</h4>
                                        <br />
                                        <h4>$200.05</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [90, 360, 0],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Noodles and Fried Egg</h4>
                                        <br />
                                        <h4>$450.10</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [-360, 0],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Plantain and Egg Sauce</h4>
                                        <br />
                                        <h4>$160.80</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [-90, 360],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Canadian Loud and Weed</h4>
                                        <br />
                                        <h4>$100.99</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    <motion.div
                                        animate={{
                                            rotate: [90, 0],
                                            scale: [1, 1.01, 1.01, 1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: "easeInOut",
                                            times: [0, 0.2, 0.5, 0.8, 1],
                                            repeat: 2,
                                            repeatDelay: 0
                                        }}
                                    >
                                        <img src={Bg} alt="img" width="100px" />

                                    </motion.div>
                                </td>
                                <td className="alignment">
                                    <div className="subdivision">
                                        <h4>Fried Yam and Pear</h4>
                                        <br />
                                        <h4>$280.12</h4>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </TablecontentColumn>
            </TablecontentContainner>
            <br />
            <br />
        </div>
    )
}

export default TableContent