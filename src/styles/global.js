import { createGlobalStyle } from 'styled-components';

import {geyser, outerSpace} from './colors';

import {
    fontSize,
    spacingsm,
    spacingmd,
    spacing2xs
} from './sizing';

export const Reset = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1;
    outline:none;
    outline-color: none;
    outline-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  body {
  	line-height: 1;
    overflow: hidden;
    background-color: ${geyser};
  }

  ol, ul {
  	list-style: none;
  }

  blockquote, q {
  	quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }

  .row {
      display:block;
  }
`;

export const Fonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Domine:400,700|Roboto:300,400,700');
  ${'' /* font-family: 'Roboto', sans-serif; font-family: 'Domine', serif; */}
  html {
    font-size: ${fontSize};
  }

    body {
        font-family: 'Roboto', sans-serif;
        color: ${outerSpace};
        font-size: ${spacingmd};
    }

    h2 {
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: ${spacingsm};
    }

    h6 {
        font-weight: 700;
        font-size: ${spacingmd};
        margin-bottom: ${spacing2xs};
    }
`;

export const SVG = createGlobalStyle`
  svg {
    height: 100%;
    width: 100%;
  }
`;