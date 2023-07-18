import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeBackgroundImage = styled.img`
  flex: 1;
`
const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`


const HomeContainer = styled.nav`
margin: 30px;
background-color: ${colors.backgroundLight};
padding: 60px 90px;
display: flex;
flex-direction: row;
max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-right: 2em;
  ${StyledLink} {
    max-width: 250px;
  }
`


function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s'occupe du reste,
            avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
              Faire le test
          </StyledLink>
        </LeftCol>
        <HomeBackgroundImage src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>

  )

}

export default Home
