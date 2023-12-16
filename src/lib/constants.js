export const ERROR_MESSAGE = {
  ID: {
    default: {
      message: '한글 혹은 영어로 된 2 ~ 8자 닉네임을 설정해주세요.',
      color: ({ theme }) => theme.colors.subGrey,
    },
    success: {
      message: '친구에게 보여질 닉네임이에요!',
      color: ({ theme }) => theme.colors.green,
    },
    invalid: {
      message: '한글 혹은 영어로 된 2 ~ 16자 닉네임을 설정해주세요.',
      color: ({ theme }) => theme.colors.red,
    },
    duplicated: {
      message: '이미 존재하는 닉네임이예요.',
      color: ({ theme }) => theme.colors.red,
    },
  },
  PW: {
    default: {
      message: '숫자, 영어로 된 8자 이상의 비밀번호를 입력해주세요.',
      color: ({ theme }) => theme.colors.subGrey,
    },
    success: {
      message: '나만 아는 비밀번호로 꼭 기억해주세요!',
      color: ({ theme }) => theme.colors.green,
    },
    invalid: {
      message: '숫자, 영어로 된 8자 이상의 비밀번호를 입력해주세요.',
      color: ({ theme }) => theme.colors.red,
    },
    incorrect: {
      message: '비밀번호가 일치하지 않습니다.',
      color: ({ theme }) => theme.colors.red,
    },
  },
}

export const DESKTOP_WIDTH = 950
export const MOBILE_MIN_WIDTH = 360
export const MOBILE_MAX_WIDTH = 390
