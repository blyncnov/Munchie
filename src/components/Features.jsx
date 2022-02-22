import React from 'react'
import {
    FcInTransit,
    FcInspection,
    FcFullTrash,
    FcFlashOn,
    FcNeutralDecision
} from "react-icons/fc"

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
                            <FeatureBoxOneCard>
                                <FcInTransit style={{ fontSize: "2em" }} />
                                <br />
                                <p>We’ll give you a free debit card. Order it right in the app.</p>
                            </FeatureBoxOneCard>
                            <FeatureBoxOneCard>
                                <FcInspection style={{ fontSize: "2em" }} />
                                <br />
                                <p>Create smart budgets to help you take control of your spending.</p>
                            </FeatureBoxOneCard>
                            <FeatureBoxOneCard>
                                <FcFullTrash style={{ fontSize: "2em" }} />
                                <br />
                                <p>See where your money goes without solving equations.</p>
                            </FeatureBoxOneCard>
                        </FeatureBoxOneSummary>
                        <br />
                        <FeatureBoxTwoSummary>
                            <FeatureBoxTwoCard>
                                <FcFlashOn style={{ fontSize: "2em" }} />
                                <br />
                                <p>We’ll give you a free debit card. Order verbally  right in the app.</p>
                            </FeatureBoxTwoCard>
                            <FeatureBoxTwoCard>
                                <FcNeutralDecision style={{ fontSize: "2em" }} />
                                <br />
                                <p>Create smart budgets to help you take control of your spending.</p>
                            </FeatureBoxTwoCard>

                        </FeatureBoxTwoSummary>
                    </FeatureRow>
                </FeatureColumn>
            </FeatureContainer>
        </>
    )
}

export default Features