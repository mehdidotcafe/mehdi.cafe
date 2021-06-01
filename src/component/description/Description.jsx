import React from 'react'
import styled from 'styled-components'

export const Paragraph = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 32px;
  text-align: justify;
  margin-block-start: 16px;
  word-wrap: normal;
  margin-block-start: ${(props) => props.noMargin && 0};
  margin-top: ${(props) => props.noMargin && 0};
`

function Description({ text, noMargin }) {
  const eText = text.replace(/(?:\r\n|\r|\n)/g, '<br />')

  return (
    <Paragraph noMargin={noMargin}>
      {/* eslint-disable-next-line */}
      <p dangerouslySetInnerHTML={{ __html: eText }} />
    </Paragraph>
  )
}

export default Description
