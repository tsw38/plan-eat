
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

import {polychromes, monochromes} from 'styles/colors';

const colors = {
    ...polychromes,
    ...monochromes
}

export default createGlobalStyle`
    .Tag {
        display: inline-block;
        padding: 0 ${sizing.iconMargin};
        font-size: ${sizing.spacingsm};
        border-radius: ${sizing.spacingsml};
        margin: 0 ${sizing.spacing2xs} ${sizing.spacing2xs} 0;
        height: ${sizing.spacingmdl};
        line-height: ${sizing.spacingmdl};

        ${() => {
            let templateLiteral = '';
            Object.keys(colors).forEach(colorName => {
                templateLiteral += `
                    &--${colorName} {
                        background-color: ${colors[colorName]};
                        color: ${lighten(0.45, colors[colorName])};
                        ${'' /* border: 1px solid ${darken(0.1, colors[colorName])}; */}
                    }
                    &--${colorName}--dark {
                        background-color: ${colors[colorName]};
                        color: ${darken(0.45, colors[colorName])};
                        ${'' /* border: 1px solid ${darken(0.1, colors[colorName])}; */}
                    }
                `;
            });
            return templateLiteral;
        }}

        &--blackSqueeze {
            color: ${darken(0.45, colors.blackSqueeze)};
        }
    }
`;