import React from 'react'

// import all styles
import { HeaderContainer } from "../style/HeaderStyle"

// import all Components
import Navigation from "./Navigation"
import HeroSection from "./HeroSection"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Navigation />
                <div className="Constrainant">
                    <HeroSection />
                </div>
            </HeaderContainer>
        </>
    )
}

export default Header