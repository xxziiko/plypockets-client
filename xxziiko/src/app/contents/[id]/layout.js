import {
  contentsDatas,
  faqDatas,
  keywordDatas,
  voteDatas,
  contentsCardDatas,
} from '@/constants'

export async function generateMetadata({ params, searchParams }, parent) {
  const { id } = params
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/contents/${id}`

  const contentData = contentsDatas.find((data) => data.id === Number(id))
  const faqData = faqDatas.find((data) => data.id === Number(id))
  const { keywords } = keywordDatas.find((data) => data.id === Number(id))

  return {
    title: contentData.title,
    description: contentData.subTitle,
    keywords: keywords,
    author: contentData.author,
    openGraph: {
      title: contentData.title,
      description: contentData.subTitle,
      url: url,
      image: contentData.paragraphs[0].image,
      type: 'website',
    },
  }
}

export default function ContentDetailLayout({ children }) {
  return <>{children}</>
}
