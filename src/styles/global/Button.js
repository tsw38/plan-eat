
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

export default createGlobalStyle`
    .Button {
        letter-spacing: 0;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: ${sizing.spacingsm};
        font-weight: ${variables.fontBold};
        padding: ${sizing.spacingxs} ${sizing.spacingmd};
        border-radius: ${sizing.spacing3xs};
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        line-height: ${sizing.spacingmd};
        border-width: ${sizing.spacing3xs};
        border-style: solid;
        ${transition()}

        &--Small {
            padding: ${sizing.spacing2xs} ${sizing.spacingxs};
        }

        &--Disabled {
            pointer-events: none;
            user-select: none;
            cursor: not-allowed;

            &.Button--Primary {
                ${colorButtons(lighten(0.20, colors.blueFrance))}
            }

            &.Button--Secondary {
                ${colorButtons(lighten(0.20, colors.blueFrance), true)}
            }

            &.Button--Tertiary {
                ${colorButtons(colors.stormPetrel, true)}

                &--Full {
                    ${colorButtons(colors.stormPetrel)}
                }
            }
            &.Button--Primary--Danger {
                ${colorButtons(lighten(0.20, colors.amour))}
            }

            &.Button--Secondary--Danger {
                ${colorButtons(lighten(0.20, colors.amour), true)}
            }
        }

        &--Primary {
            ${colorButtons(colors.blueFrance)};

            &:hover {
                ${colorButtons(darken(0.20, colors.blueFrance))}
            }
        }

        &--Secondary {
            ${colorButtons(colors.blueFrance, true)};

            &:hover {
                ${colorButtons(colors.blueFrance)}
            }
        }

        &--Tertiary {
            ${colorButtons(colors.imperialPrimer, true)}

            &:hover {
                ${colorButtons(colors.imperialPrimer)}
            }

            &--Full {
                ${colorButtons(colors.imperialPrimer)}

                &:hover {
                    ${colorButtons(colors.imperialPrimer, true)}
                }
            }

            .Button--Disabled & {}
        }

        &--Primary--Danger {
            ${colorButtons(colors.amour)}

            &:hover {
                ${colorButtons(darken(0.2, colors.amour, true))}
            }
        }

        &--Secondary--Danger {
            ${colorButtons(colors.amour, true)}

            &:hover {
                ${colorButtons(colors.amour)}
            }
        }

        &--Ghost {
            .Button--Disabled & {}
        }



        .Icon--Wrapper {
            height: ${sizing.spacinglg};

            .Icon {
                padding: ${sizing.spacing2xs};
                width: ${sizing.spacinglg};

                .Recipe--Serving-Toggle & {
                    padding: ${sizing.spacing3xs};
                }
            }
        }
    }

    .Button--Header {
        border-radius: 50%;
        height: ${sizing.spacinglg};
        width: ${sizing.spacinglg};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }


    .Button.editable.Tag {
        padding: 0 0 0 ${sizing.spacingmd};
        margin: inherit;
        height: auto;
    }

    .Button.Tag {
        padding: 0 ${sizing.spacingmd};



        &--Caution {
            ${colorButtons(colors.casandora)}
            color: ${colors.imperialPrimer};
            fill: ${colors.imperialPrimer};

            &:hover {
                ${colorButtons(darken(0.2, colors.casandora))}
            }
        }

        &--Hazard {
            ${colorButtons(colors.casandora)}
            &:hover {
                ${colorButtons(darken(0.2, colors.casandora))}
            }
        }

        &--Hazard--Inverted {
            ${colorButtons(colors.casandora, true)}

            &:hover {
                ${colorButtons(colors.casandora)}
            }
        }

        &--Favorite {
            ${colorButtons(colors.lotusPink)}

            &:hover {
                ${colorButtons(darken(0.2, colors.lotusPink))}
            }
        }

        &--Favorite--Inverted {
            ${colorButtons(colors.lotusPink, true)}

            &:hover {
                ${colorButtons(colors.lotusPink)}
            }
        }

        &--Royal {
            ${colorButtons(colors.nasaPurple)}

            &:hover {
                ${colorButtons(lighten(0.2, colors.nasaPurple))}
            }
        }

        &--Royal--Inverted {
            ${colorButtons(colors.nasaPurple, true)}

            &:hover {
                ${colorButtons(colors.nasaPurple)}
            }
        }

        &--Go {
            ${colorButtons(colors.carribean)}

            &:hover {
                ${colorButtons(darken(0.2, colors.carribean))}
            }
        }

        &--Go--Inverted {
            ${colorButtons(colors.carribean, true)}

            &:hover {
                ${colorButtons(colors.carribean)}
            }
        }

        svg {
            height: ${sizing.spacinglg};
            width: ${sizing.spacinglg};
            padding: ${sizing.spacing2xs};
            background-color: white;
            margin-left: ${sizing.spacingmd};

            path {
                transform-origin: 50%;
                transform: rotate(0deg);
                transition: inherit;
            }
        }
    }
`;
