import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/background.png'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${() => `url(${introBackgroundImg}) no-repeat center`};
  filter: blur(18px);
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  width: 100%;
  height: 34rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
