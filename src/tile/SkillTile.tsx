import styled, { css } from 'styled-components'

import Image, { ImageProps } from '@Image'
import { Color } from '@theme/theme'
import Overlay from '@tile/Overlay'
import useTranslations from '@translation/useTranslations'

const side = 164
const littleSide = side / 2

const progressSide = Math.floor(side / 3.5)

type Props = {
  isLittle?: boolean
  showExperience?: boolean
  backgroundColor: Color
  isSelected?: boolean
  logo: string
  logoType?: string
  name: string
  experience: number
}

const SkillTile = ({
  isLittle,
  showExperience,
  backgroundColor,
  isSelected,
  logo,
  logoType = 'png',
  name,
  experience,
}: Props) => {
  const t = useTranslations()

  return (
    <RelativeContainer>
      <SuperContainer $isLittle={isLittle} $isSelected={isSelected} $isMarged={showExperience}>
        <Container
          $isSelected={isSelected}
          $isLittle={isLittle}
          style={{ backgroundColor }}
        >
          <SubContainer $isLittle={isLittle}>
            <SkillImage alt={`${name} logo`} src={`/images/skills/${logo}.${logoType}`} type={logoType} />
            <Overlay
              style={{ backgroundColor }}
              $isLittle={isLittle}
              $backgroundColor={backgroundColor}
            >
              <span>{name}</span>
            </Overlay>
          </SubContainer>
        </Container>
      </SuperContainer>
      { showExperience
      && (
        <AsideContainer>
          <AsideTextContainer>
            <AsideTextValue>{experience}</AsideTextValue>
            <AsideTextYears>{t.skillTile[experience > 1 ? 'years' : 'year']}</AsideTextYears>
          </AsideTextContainer>
        </AsideContainer>
      )}

    </RelativeContainer>
  )
}

const littleSize = css`
height: calc(${side}px / 2);
width: calc(${side}px / 2);
`

const Container = styled.div<{
  $isLittle?: boolean
  $isSelected?: boolean
}>`
position: absolute;
overflow: hidden;
height: ${(props) => (props.$isLittle ? littleSide : side)}px;
width: ${(props) => (props.$isLittle ? littleSide : side)}px;
background-color: ${(props) => props.theme.mainColor};
text-align: center;
justify-content: center;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
cursor: pointer;
transition: transform 0.2s, filter 0.3s;  
${(props) => props.$isSelected && 'transform: scale(0.8);'}

${(props) => props.theme.isPhone} {
  ${littleSize}
}
`

const AsideContainer = styled.aside`
background-color: ${(props) => props.theme.secondaryColor};
position: relative;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
position: absolute;

  width: ${progressSide}px;
  height: ${progressSide}px;
  top: calc(-${progressSide}px / 2);
  right: 10%;
`

const AsideTextContainer = styled.div`
text-align: center;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
font-family: var(${(props) => props.theme.font.title});
color: white;
line-height: 1.2;
display: flex;
flex-direction: column;
justify-content: center;
`

const AsideTextValue = styled.div`
font-size: 18px;
`

const AsideTextYears = styled.div`
text-transform: uppercase;
font-size: 13px;
`

const SuperContainer = styled.div<{
  $isSelected?: boolean
  $isLittle?: boolean
  $isMarged?: boolean
}>`
position: relative;
height: ${(props) => (props.$isLittle ? littleSide : side)}px;
width: ${(props) => (props.$isLittle ? littleSide : side)}px;
margin: ${(props) => (props.$isMarged ? '15' : '0')}px;

&:hover {
  ${Overlay} {
    opacity: 1;
  }
}

${(props) => props.theme.isPhone} {
  ${littleSize}
  ${(props) => (props.$isMarged && 'margin-left: 0;')}
  ${(props) => (props.$isMarged && 'margin-right: 0;')}
}
`

const SubContainer = styled.div<{
  $isLittle?: boolean
}>`
position: relative;
height: ${(props) => (props.$isLittle ? littleSide : side)}px;
width: ${(props) => (props.$isLittle ? littleSide : side)}px;

${(props) => props.theme.isPhone} {
  ${littleSize}
}
`

const SkillImage = styled(Image)<ImageProps>`
margin-top: 18.75%;
height: 62.5%;
width: 62.5%;
`

const RelativeContainer = styled.div`
position: relative;
`

export default SkillTile
