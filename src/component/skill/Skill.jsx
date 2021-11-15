import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Image from '../../Image'

import { Overlay } from '../tile/Overlay'

import ProgressRing from '../ProgressRing'

const littleSize = css`
height: calc(164px / 2);
width: calc(164px / 2);
`

const Container = styled.div`
position: absolute;
height: ${(props) => (props.isLittle ? '64' : '164')}px;
width: ${(props) => (props.isLittle ? '64' : '164')}px;
background-color: ${(props) => props.theme.mainColor};
text-align: center;
justify-content: center;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
cursor: pointer;
transition: transform 0.2s, filter 0.3s;  
${(props) => props.isSelected && 'transform: scale(0.8);'}
${(props) => props.isSelected && props.isLittle && 'filter: brightness(150%);'}

${(props) => props.theme.isPhone} {
  ${littleSize}
}
`

const AsideContainer = styled.aside`
background-color: ${(props) => props.theme.secondaryColor};
position: relative;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
position: absolute;

${(props) => props.theme.isPhone} {
  width: 46px;
  height: 46px;
}

${(props) => props.theme.isPhone} {
  width: 28px;
  height: 28px;
  top: calc(-28px / 2);
  right: calc(28px / 2);
}

${(props) => props.theme.isLaptop} {
  width: 46px;
  height: 46px;
  top: calc(-46px / 2);
  right: calc(46px / 2);
}
`

const AsideTextContainer = styled.div`
text-align: center;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
font-family: 'Oswald', sans-serif;
color: white;
line-height: 1.2;
display: flex;
flex-direction: column;
justify-content: center;
`

const AsideTextNum = styled.div`
font-size: 16px;
`

const AsideTextYears = styled.div`
text-transform: uppercase;
font-size: 10px;

${(props) => props.theme.isPhone} {
  font-size: 6px;
}
`

const SuperContainer = styled.div`
position: relative;
height: ${(props) => (props.isLittle ? '64' : '164')}px;
width: ${(props) => (props.isLittle ? '64' : '164')}px;
margin: ${(props) => (props.isMarged ? '15' : '0')}px;

&:hover {
  ${Overlay} {
    opacity: 1;
  }
  
  ${Container} {
    ${(props) => (props.isLittle && 'filter: brightness(150%);')}
  }
}

${(props) => props.theme.isPhone} {
  ${littleSize}
  ${(props) => (props.isMarged && 'margin-left: 0;')}
  ${(props) => (props.isMarged && 'margin-right: 0;')}
}
`

const SubContainer = styled.div`
position: relative;
height: ${(props) => (props.isLittle ? '64' : '164')}px;
width: ${(props) => (props.isLittle ? '64' : '164')}px;

${(props) => props.theme.isPhone} {
  ${littleSize}
}
`

const SkillImage = styled(Image)`
margin-top: 18.75%;
height: 62.5%;
width: 62.5%;
`

const PrContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 2;

svg {
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
}
`

const RelativeContainer = styled.div`
position: relative;
`

class Skill extends Component {
  static getStroke(side) {
    return (side * 12.5) / 164
  }

  static calcExperienceSide(side) {
    return side / 2
  }

  render() {
    const largeSide = Math.floor(164 / 3.5)
    const largeStroke = Skill.getStroke(largeSide)
    const smallSide = Math.floor(largeSide / 1.6)
    const smallStroke = Skill.getStroke(smallSide)

    const {
      isLittle,
      showExperience,
      backgroundColor,
      isSelected,
      logo,
      name,
      backgroundImage,
      experience,
    } = this.props

    return (
      <RelativeContainer>
        <SuperContainer isLittle={isLittle} isSelected={isSelected} isMarged={showExperience}>
          <Container
            isSelected={isSelected}
            isLittle={isLittle}
            style={{ backgroundColor }}
          >
            <SubContainer isLittle={isLittle}>
              <SkillImage alt={name} src={`/images-webp/skills/${logo}.png`} />
              { !isLittle
                  && (
                  <Overlay style={{ backgroundColor, backgroundImage }}>
                    <span>{name}</span>
                  </Overlay>
                  )}
            </SubContainer>
          </Container>
        </SuperContainer>
        { showExperience
        && (
          <AsideContainer>
            <RelativeContainer>
              <PrContainer className="bp-large"><ProgressRing side={Math.floor(largeSide)} stroke={largeStroke} progress={(experience * 100) / 5} /></PrContainer>
              <PrContainer className="bp-small"><ProgressRing side={Math.floor(smallSide)} stroke={smallStroke} progress={(experience * 100) / 5} /></PrContainer>
            </RelativeContainer>
            <AsideTextContainer>
              <AsideTextNum>{experience}</AsideTextNum>
              <AsideTextYears>{experience > 1 ? 'ANNÉES' : 'ANNÉE'}</AsideTextYears>
            </AsideTextContainer>
          </AsideContainer>
        )}

      </RelativeContainer>
    )
  }
}

export default Skill
