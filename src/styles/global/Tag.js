
import { createGlobalStyle } from 'styled-components';
import {transition, colorButtons} from 'styles/mixins/index';
import { darken, lighten } from 'polished';

import * as colors from 'styles/colors';
import * as sizing from 'styles/sizing';
import * as variables from 'styles/variables';

// console.warn(Object.keys(colors));

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
                        ${'' /* color: ${darken(0.35, colors[colorName])}; */}
                        color: white;
                    }
                    &--${colorName}--dark {
                        background-color: ${colors[colorName]};
                        color: ${darken(0.5, colors[colorName])};
                    }
                `;
            });
            return templateLiteral;
        }}
    }
`;