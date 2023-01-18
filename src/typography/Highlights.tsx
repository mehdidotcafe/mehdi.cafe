import styled from 'styled-components'

type Props = {
  highlights: {
    title?: string
    content: string[]
  }[]
}

const Highlights = ({ highlights }: Props) => (
  <Container>
    {highlights.map((highlight) => (
      <div key={highlight.title ?? '_default'}>
        <p>{highlight.title ?? ''}</p>
        <StyledUl>
          {highlight.content.map((content) => (
            <SyledLi key={content} dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </StyledUl>
      </div>
    ))}
  </Container>
)

const Container = styled.div`
font-size: 22px;
`

const StyledUl = styled.ul`
margin-block-start: 0;
margin-block-end: 0;
list-style: none;
padding-left: 16px;
`

const SyledLi = styled.li`
:before {
  content: "";
  display: inline-block;
  height: 6px;
  width: 6px;
  background-color: ${(props) => props.theme.mainColor};
  margin-right: 8px;
}
`

export default Highlights
