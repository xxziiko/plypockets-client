import { useRouter } from 'next/navigation'
import styled from 'styled-components'

export default function Modal(props) {
  const { onClose } = props
  const router = useRouter()

  return (
    <BackGround>
      <StyledModal>
        <Box>
          선물까지 얼마 안남았어요!
          <br />
          지금 나가시면 작성중인 선물 보따리가 사라질 수 있어요.
        </Box>

        <ImageBox>
          <img src="/img/box.gif" />
        </ImageBox>

        <ButtonBox>
          <Button
            color="var(--main_grey, #c1c1c1)"
            style={{
              backGround: 'var(--field_grey, #f9f9f9)',
              border: ' 1px solid var(--stroke_grey, #e5e5e5)',
            }}
            onClick={() =>
              router.push('/gift/playlist', undefined, { shllow: true })
            }
          >
            그래도 나가기
          </Button>
          <Button
            onClick={() => onClose()}
            color="#fff"
            style={{
              background: 'var(--sub_green, #00C496)',
              border: '1px solid var(--main_green, #00916F',
            }}
          >
            마저 작성하기
          </Button>
        </ButtonBox>
      </StyledModal>
    </BackGround>
  )
}

const BackGround = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

const StyledModal = styled.div`
  display: flex;
  width: 311px;
  height: 356px;
  padding: 32px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
  border: 1px solid var(--stroke_grey, #e5e5e5);
  background: #fff;
  z-index: 999;
  animation: ${({ theme }) => theme.animation.bounceUp} 1s;
`

const Box = styled.div`
  color: var(--text_basic, var(--text_basic, #323232));
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.56px;
`

const ButtonBox = styled.div`
  display: flex;
  width: 311px;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const ImageBox = styled.div`
  width: 150px;
  height: 150px;
`

const Button = styled.button`
  width: 121px;
  height: 40px;
  border-radius: 64px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.56px;

  color: ${(props) => props.color};
`
