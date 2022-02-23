import React from 'react'
import { FeaturedataOne, FeaturedataTwo } from "../data/FeatureData"

import {
    FeatureContainer,
    FeatureColumn,
    FeatureRow,
    FeatureBoxOneSummary,
    FeatureBoxOneCard,
    FeatureBoxTwoSummary,
    FeatureBoxTwoCard
} from "../style/FeatureStyle"

const Features = () => {
    return (
        <>
            <FeatureContainer>

                <FeatureColumn>
                    <FeatureRow>
                        <FeatureBoxOneSummary>
                            {FeaturedataOne.map((featureOne) => {
                                return (

                                    <FeatureBoxOneCard key={featureOne.id}>
                                        {featureOne.icon}
                                        <br />
                                        <p>{featureOne.desc}</p>
                                    </FeatureBoxOneCard>

                                )
                            })}
                        </FeatureBoxOneSummary>
                        <br />
                        <FeatureBoxTwoSummary>
                            {FeaturedataTwo.map((featureTwo) => {
                                return (
                                    <FeatureBoxTwoCard key={featureTwo.id}>
                                        {featureTwo.icon}
                                        <br />
                                        <p>{featureTwo.desc}</p>
                                    </FeatureBoxTwoCard>

                                )
                            })}
                        </FeatureBoxTwoSummary>
                    </FeatureRow>
                </FeatureColumn>
            </FeatureContainer>
        </>
    )
}

export default Features