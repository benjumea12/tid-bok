import styled from 'styled-components'
// Theme
import { color } from '../../theme/my-theme'
// Interfaces
import { TypographyAttributes } from './Typography';

export const Heading = styled.h2<TypographyAttributes>`
  margin: 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 40px;
  font-weight: 700;
  line-height: 13pt;
  color: ${ props => color(props.bg) };
`

export const H1 = styled.h1<TypographyAttributes>`
  margin: 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 32px;
  font-weight: 600;
  line-height: 28pt;
  color: ${ props => color(props.bg) };
`

export const H2 = styled.h2<TypographyAttributes>`
  margin: 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 28px;
  font-weight: 600;
  color: ${ props => color(props.bg) };
`

export const H3 = styled.h3<TypographyAttributes>`
  margin: 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 24px;
  font-weight: 600;
  color: ${ props => color(props.bg) };
  line-height: 15pt;
`

export const H4 = styled.h4<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 22px;
  font-weight: 500;
  color: ${ props => color(props.bg) };
  line-height: 15pt;
`

export const H5 = styled.h5<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 20px;
  font-weight: 500;
  color: ${ props => color(props.bg) };
  line-height: 13pt;
`

export const H6 = styled.h6<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 18px;
  font-weight: 500;
  color: ${ props => color(props.bg) };
  line-height: 13pt;
`
export const Sub = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.secondary };
  font-size: 16px;
  line-height: 12pt;
  color: ${ props => color(props.bg) };
`
export const Sub2 = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.secondary };
  font-size: 16px;
  line-height: 12pt;
  font-weight: 500;
  color: ${ props => color(props.bg) };
`

export const P = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.secondary };
  font-size: 15px;
  line-height: 11pt;
  color: ${ props => color(props.bg) };
`
export const P2 = styled.p<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.secondary };
  font-size: 15px;
  line-height: 11pt;
  font-weight: 500;
  color: ${ props => color(props.bg) };
`


export const HeadingH3 = styled.h3<TypographyAttributes>`
  margin: 4px 0px;
  font-family: ${ props => props.theme.fonts.primary };
  font-size: 35px;
  font-weight: 700;
  color: ${ props => color(props.bg) };
`
