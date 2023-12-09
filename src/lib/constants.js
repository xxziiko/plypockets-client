export const ERROR_MESSAGE = {
  ID: {
    default: {
      message: '한글 혹은 영어로 된 2 ~ 8자 닉네임을 설정해주세요.',
      color: '#595959',
    },
    success: {
      message: '멋진 닉네임이네요!',
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
      text: '숫자, 영어로 된 8자 이상의 비밀번호를 입력해주세요.',
      color: '#595959',
    },
    success: {
      text: '안전한 비밀번호예요.',
      color: ({ theme }) => theme.colors.green,
    },
    invalid: {
      text: '숫자, 영어로 된 8자 이상의 비밀번호를 입력해주세요.',
      color: ({ theme }) => theme.colors.red,
    },
  },

  EMAIL: {
    default: {
      text: '비밀번호 유실시 찾을 수 있는 이메일을 입력해주세요.',
      color: '#595959',
    },
    success: {
      text: '올바른 이메일 형식이예요.',
      color: ({ theme }) => theme.colors.green,
    },
    invalid: {
      text: '이메일 형식이 올바르지 않아요.',
      color: ({ theme }) => theme.colors.red,
    },
  },
}
