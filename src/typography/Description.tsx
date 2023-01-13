import styled from 'styled-components'

type ParagraphProps = {
  noMargin?: boolean
}

type Props = {
  text: string
} & ParagraphProps

const Description = ({ text, noMargin }: Props) => {
  const textAsHtml = text.replace(/(?:\r\n|\r|\n)/g, '<br />')

  return (
    <Paragraph noMargin={noMargin}>
      {/* eslint-disable-next-line */}
      <p dangerouslySetInnerHTML={{ __html: textAsHtml }} />
    </Paragraph>
  )
}

export const Paragraph = styled.div<ParagraphProps>`
  font-family: var(${(props) => props.theme.font.content});
  font-size: 32px;
  text-align: justify;
  margin-block-start: 16px;
  word-wrap: normal;
  margin-block-start: ${(props) => props.noMargin && 0};
  margin-top: ${(props) => props.noMargin && 0};
`

export default Description
