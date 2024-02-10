import styled from 'styled-components'
import { Typography } from '@/components'
import GoBackIcon from '@/icons/GoBackIcon'
import ProgressIcon from '@/icons/ProgressIcon'
import theme from '@/styles/theme'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'

// TODO: main header 하나로 통일
// TODO: Compound 패턴으로 구현하기
// (e.g.)
// <Header>
//   <TitleBox>
//     <Title>어쩌고저쩌고</Title>
//   </TitleBox>
// </Header>

export default function GiftHeader(props) {
  const {
    colors = {
      backgroundColor: theme.colors.white,
      title: theme.colors.black,
      subTitle: theme.colors.black,
      button: theme.colors.brown,
    },
    step = 0,
    title,
    subTitle,
    buttonAction,
    hideIcon = false,
    hideButton = false,
  } = props
  return (
    <Box backgroundColor={colors.backgroundColor}>
      <TitleBox>
        <Title>
          <Typography
            color={colors.title}
            size={({ theme }) => theme.fontSize.h2}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-1.28}
          >
            {title}
          </Typography>
          {!hideIcon && (
            <IconBox>
              <ProgressIcon
                lastStep={step > 2 ? '#F84A68' : theme.colors.green}
                secondStep={step > 1 ? '#F84A68' : theme.colors.green}
                firstStep={step > 0 ? '#F84A68' : theme.colors.green}
              />
            </IconBox>
          )}
        </Title>

        {subTitle && (
          <SubTitle>
            <Typography
              color={colors.subTitle}
              size={({ theme }) => theme.fontSize.small}
              weight={({ theme }) => theme.fontWeight.medium}
              spacing={-0.64}
            >
              {subTitle}
            </Typography>
          </SubTitle>
        )}
      </TitleBox>
      {!hideButton && (
        <ButtonIcon onClick={() => buttonAction()}>
          <GoBackIcon color={colors.button} />
        </ButtonIcon>
      )}
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 32px;
  background-color: ${(props) => props.backgroundColor};

  ${flexSpaceBetween}
`

const TitleBox = styled.div`
  gap: 25px;
  white-space: pre-wrap;
  ${flexDirection};
`

const Title = styled.div`
  ${flexAlign}
`

const SubTitle = styled.div`
  height: 20px;
  white-space: pre-wrap;
`

const IconBox = styled.div`
  height: 100%;
  padding-bottom: 3px;
`

const ButtonIcon = styled(IconBox)`
  cursor: pointer;
`
