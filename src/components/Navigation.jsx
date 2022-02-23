import React, { useState } from 'react'
import { RiBarChartHorizontalLine } from "react-icons/ri"
import { FaTimes } from "react-icons/fa"
// import all Components


// import all Data 
import {
    LogoName,
    NavItemLists
} from "../data/NavbarDataItems"

// import all styles
import {
    NavigationContainer,
    NavigationColumn,
    NavigationRow,
    ItemBackground,
    Items,
    Lists,
    MobileIcon
} from "../style/NavigationStyle"

const Navigation = () => {
    const [isclicked, setIsClicked] = useState(true)

    const isClickedHandler = () => {
        setIsClicked(!isclicked)
        console.log("true");
    }

    return (
        <div className="contain__global">
            <NavigationContainer>
                <NavigationColumn>
                    <div className="Constrainant">
                        <NavigationRow>
                            <div className="Navbar__logo">
                                <h1 >{LogoName}</h1>
                            </div>

                            <ItemBackground click={isclicked} onClick={isClickedHandler}>
                                <Items>
                                    {NavItemLists.map((lists) => {
                                        return <Lists key={lists.id}>
                                            <a href={lists.name}>{lists.name}</a>
                                        </Lists>
                                    })}
                                </Items>
                            </ItemBackground>

                            <MobileIcon onClick={isClickedHandler}>
                                {isclicked ? <RiBarChartHorizontalLine style={{ fontSize: "1.5em" }} />
                                    : <FaTimes style={{ fontSize: "1.5em" }} />}
                            </MobileIcon>
                        </NavigationRow>
                    </div>
                </NavigationColumn>
            </NavigationContainer>
        </div>
    )
}

export default Navigation