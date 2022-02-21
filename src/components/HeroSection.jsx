import React from 'react'
import { motion } from 'framer-motion'

// ________ Import  Hero Section Data  ______________
import { HeroSectionInfo } from "../data/HeroSectionData"

// ________ Import HeroSection Styles ______________
import {
    HeroSectionContainer,
    HeroSectionRow,
    HeroSectionColumn
} from "../style/HeroSectionStyle"

const HeroSection = () => {
    return (
        <>
            <HeroSectionContainer>
                <HeroSectionRow row={HeroSectionInfo.direction} >
                    <HeroSectionColumn>
                        <motion.h1
                            initial={{ x: 250, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <span>Order<span />
                            </span>{HeroSectionInfo.title}</motion.h1>

                        <motion.p
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 2 }}
                            transition={{ duration: 2 }}
                        >{HeroSectionInfo.desc}</motion.p>

                        <motion.p
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 2 }}
                            transition={{ duration: 2 }}
                        >{HeroSectionInfo.add}</motion.p>

                        <motion.button
                            initial={{ x: `-100vw ` }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.1, duration: 2 }}>
                            <a href="/">{HeroSectionInfo.button}</a>
                        </motion.button>
                    </HeroSectionColumn>
                    <HeroSectionColumn align={false}>
                        <motion.img
                            initial={{ y: `50%` }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2, duration: 2 }}
                            src={HeroSectionInfo.url} alt="banner" />
                    </HeroSectionColumn>
                </HeroSectionRow>
            </HeroSectionContainer >
        </>
    )
}

export default HeroSection