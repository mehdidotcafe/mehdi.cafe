import styled from 'styled-components'

type Props = {
  text: string
}

const EmptyTile = ({
  text,
}: Props) => (
  <Container>
    <EmojiIcon role="img" aria-label={text}>😥</EmojiIcon>
    <sub>{text}</sub>
  </Container>
)

const Container = styled.span`
  display: flex;
  flex-direction: column;
  font-family: var(${(props) => props.theme.font.terciary});
  text-align: center;

  sub {
    margin: 12px;
    font-size: 20px !important;
    text-transform: uppercase;
  }
`

const EmojiIcon = styled.span`
  font-size: 80px;
  text-align: center;
`

export default EmptyTile
