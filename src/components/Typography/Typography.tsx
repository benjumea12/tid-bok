import React from 'react'
// Styled components
import { Heading, H1, H2, H3, H4, H5, H6, Sub, Sub2, P, P2, HeadingH3 } from './Typography.styled';
// My theme
import { TColors } from '../../theme/my-theme'
// Interfaces
interface ITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'sub' | 'sub2' | 'p' | 'p2' | 'heading' | 'headingH3',
  bg?: TColors,
  children?: JSX.Element | string
}

export type TypographyAttributes = ITypographyProps & React.HTMLAttributes<HTMLElement>

const Typography = (props: TypographyAttributes): JSX.Element => {
  const { variant } = props;

  switch (variant) {
    case 'h1':
      return <H1 {...props}>{ props.children }</H1>
    case 'h2':
      return <H2 {...props}>{ props.children }</H2>
    case 'h3':
      return <H3 {...props}>{ props.children }</H3>
    case 'h4':
      return <H4 {...props}>{ props.children }</H4>
    case 'h5':
      return <H5 {...props}>{ props.children }</H5>
    case 'h6':
      return <H6 {...props}>{ props.children }</H6>
    case 'sub':
      return <Sub {...props}>{ props.children }</Sub>
    case 'sub2':
      return <Sub2 {...props}>{ props.children }</Sub2>
    case 'p':
      return <P {...props}>{ props.children }</P>
    case 'p2':
      return <P2 {...props}>{ props.children }</P2>
    case 'heading':
      return <Heading {...props}>{ props.children }</Heading>
    case 'headingH3':
      return <HeadingH3 {...props}>{ props.children }</HeadingH3>
    default:
      return <P {...props}>{ props.children }</P>
  }
}

export default Typography;
