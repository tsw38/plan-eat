
import styled, { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from '../mixins/index';
import {darken, lighten} from 'polished';

import {
    jigglypuff, lotusPink, casandora, dragonSkin,
    pastelRed, amour, megaMan, cyanite, carribean,
    mountainMeadow, jadeDust, aquaVelvet, joustBlue,
    blueFrance, nasaPurple, bluebell, white, ballerina,
    stormPetrel, fuelTown, imperialPrimer
} from 'styles/colors';

import { spacing3xs, spacingsm, spacing2xs, spacingmd, spacingxs, spacinglg } from 'styles/sizing';

import { fontBold } from 'styles/variables';

export const StyledButton = styled.button`

`;

export default createGlobalStyle`
    .Button {
        letter-spacing: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: ${spacingsm};
        font-weight: ${fontBold};
        padding: ${spacingxs} ${spacingmd};
        border-radius: ${spacing3xs};
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${spacingmd};
        border-width: ${spacing3xs};
        border-style: solid;
        ${transition()}


        &--Header {
            position: relative;
        }

        &--Small {
            padding: ${spacing2xs} ${spacingxs};
        }

        &--Disabled {
            pointer-events: none;
            user-select: none;
            cursor: not-allowed;

            &.Button--Primary {
                ${colorButtons(lighten(0.20, blueFrance))}
            }

            &.Button--Secondary {
                ${colorButtons(lighten(0.20, blueFrance), true)}
            }

            &.Button--Tertiary {
                ${colorButtons(stormPetrel, true)}

                &--Full {
                    ${colorButtons(stormPetrel)}
                }
            }
            &.Button--Primary--Danger {
                ${colorButtons(lighten(0.20, amour))}
            }

            &.Button--Secondary--Danger {
                ${colorButtons(lighten(0.20, amour), true)}
            }
        }

        &--Primary {
            ${colorButtons(blueFrance)};

            &:hover {
                ${colorButtons(darken(0.20, blueFrance))}
            }
        }

        &--Secondary {
            ${colorButtons(blueFrance, true)};

            &:hover {
                ${colorButtons(blueFrance)}
            }
        }

        &--Tertiary {
            ${colorButtons(imperialPrimer, true)}

            &:hover {
                ${colorButtons(imperialPrimer)}
            }

            &--Full {
                ${colorButtons(imperialPrimer)}

                &:hover {
                    ${colorButtons(imperialPrimer, true)}
                }
            }

            .Button--Disabled & {}
        }

        &--Primary--Danger {
            ${colorButtons(amour)}

            &:hover {
                ${colorButtons(darken(0.2, amour, true))}
            }
        }


        &--Secondary--Danger {
            ${colorButtons(amour, true)}

            &:hover {
                ${colorButtons(amour)}
            }
        }

        &--Ghost {
            .Button--Disabled & {}
        }

        &.Tag {
            padding: 0 0 0 ${spacingmd};

            &:hover {
                svg path {
                    transform: rotate(45deg);
                }
            }

            &--Caution {
                ${colorButtons(casandora)}
                color: ${imperialPrimer};
                fill: ${imperialPrimer};

                &:hover {
                    ${colorButtons(darken(0.2, casandora))}
                }
            }

            &--Hazard {
                ${colorButtons(dragonSkin)}
                &:hover {
                    ${colorButtons(darken(0.2, dragonSkin))}
                }
            }

            &--Hazard--Inverted {
                ${colorButtons(dragonSkin, true)}
                &:hover {
                    ${colorButtons(darken(0.2, dragonSkin), true)}
                }
            }

            &--Favorite {
                ${colorButtons(lotusPink)}

                &:hover {
                    ${colorButtons(darken(0.2, lotusPink))}
                }
            }

            &--Favorite--Inverted {
                ${colorButtons(lotusPink, true)}

                &:hover {
                    ${colorButtons(darken(0.2, lotusPink), true)}
                }
            }

            &--Royal {
                ${colorButtons(nasaPurple)}

                &:hover {
                    ${colorButtons(lighten(0.2, nasaPurple))}
                }
            }

            &--Royal--Inverted {
                ${colorButtons(nasaPurple, true)}

                &:hover {
                    ${colorButtons(lighten(0.2, nasaPurple), true)}
                }
            }

            &--Go {
                ${colorButtons(mountainMeadow)}

                &:hover {
                    ${colorButtons(darken(0.2, mountainMeadow))}
                }
            }

            &--Go--Inverted {
                ${colorButtons(mountainMeadow, true)}

                &:hover {
                    ${colorButtons(darken(0.2, mountainMeadow), true)}
                }
            }


            svg {
                height: ${spacinglg};
                width: ${spacinglg};
                padding: ${spacing2xs};
                background-color: white;
                margin-left: ${spacingmd};

                path {
                    transform-origin: 50%;
                    transform: rotate(0deg);
                    transition: inherit;
                }
            }
        }
    }
`;