import styled from 'styled-components'
import { Typography } from '@/components'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'
import GoBackIcon from '@/icons/GoBackIcon'
import ProgressIcon from '@/icons/ProgressIcon'

export default function PlaylistHeader(props) {
  const {
    backgroundColor = ({ theme }) => theme.colors.white,
    title,
    subtitle,
    buttonAction,
  } = props
  return (
    <Box backgroundColor={backgroundColor}>
      <TitleBox>
        <Title>
          <Typography
            color={({ theme }) => theme.colors.black}
            size={({ theme }) => theme.fontSize.large}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-1.28}
          >
            {title}
          </Typography>
          <IconBox>
            <ProgressIcon
              firstStep="#00916F"
              secondStep="#00916F"
              lastStep="#F84A68"
            />
          </IconBox>
        </Title>

        <SubTitle>
          <Typography
            color={({ theme }) => theme.colors.black}
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.64}
          >
            {subtitle}
          </Typography>
        </SubTitle>
      </TitleBox>
      <ButtonIcon onClick={() => buttonAction()}>
        <GoBackIcon color="#cccccc" />
      </ButtonIcon>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  min-height: 110px;
  padding: 48px 32px 12px;
  background-color: ${(props) => props.color};

  ${flexSpaceBetween}
`

const TitleBox = styled.div`
  gap: 10px;

  ${flexDirection}
`

const Title = styled.div`
  ${flexAlign}
`

const SubTitle = styled.div`
  height: 20px;
`

const IconBox = styled.div`
  height: 100%;
  padding-bottom: 3px;
`

const ButtonIcon = styled(IconBox)`
  cursor: pointer;
`
