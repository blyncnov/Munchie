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
                    <HeroSectionColumn
                        align={false} >
                        <motion.div
                            animate={{
                                rotate: [90, 360],
                                scale: [1, 1.01, 1.01, 1, 1],
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: 0,
                                repeatDelay: 0
                            }}
                        >
                            <motion.img
                                initial={{ y: `360` }}
                                animate={{ y: -10 }}

                                transition={{ delay: 0.2, duration: 2 }}
                                src={HeroSectionInfo.url} alt="banner" />
                            <motion.img
                                initial={{ y: `0` }}
                                animate={{ y: -10 }}

                                transition={{ delay: 0.2, duration: 2 }}
                                src={HeroSectionInfo.img} alt="banner" className="stay" />
                        </motion.div>

                    </HeroSectionColumn>
                </HeroSectionRow>
            </HeroSectionContainer >
        </>
    )
}

export default HeroSection