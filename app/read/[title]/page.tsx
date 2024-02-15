'use client'
import Link from 'next/link'
import React from 'react'

const article = [
  {
    date: '13/01/2023',
    content: 'Rust Programlama S0B1:Temeller',
    title: 'rust-programlama-s0b1-temeller',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '13/03/2023',
    content: 'Rust ile Vigenere’nin Hakkını Verme',
    title: 'rust-ile-vigenere-nin-hakkini-verme',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '23/01/2023',
    content: 'Rust İle Sezar’ın Hakkını Verme',
    title: 'rust-ile-sezar-nin-hakkini-verme',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '01/02.2023',
    content: 'Rust’ta Blockchain Simülasyonu',
    title: 'rustta-blockchain-simulasyonu',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '16/02/2023',
    content: 'Rust’ta Merge Sort Algoritması',
    title: 'rustta-merge-sort-algoritmasi',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '02/01/2023',
    content: 'RUST : HashMap ve Hashing',
    title: 'rust-hashmap-ve-hashing',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak',
    tags: ['rust', 'programming', 'beginner']
  },
  {
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak',
    tags: ['rust', 'programming', 'beginner']
  }
]
export default function Page ({ params }: any) {
  console.log('params', params)
  const [articleData, setArticleData] = React.useState(article)

  const filteredArticle = articleData.filter((article: any) => {
    return article.title === params.title
  })

  return (
    <div>
      <div>
        {filteredArticle.map((article: any, index : any) => (
          <div
              key={index}>
            <div className='flex flex-row space-x-4 underline  text-blue-300'>
              {article.tags.map((tag: any) => (
                <Link key={index} className='font-arimo' href={''}>
                  #{tag}
                </Link>
              ))}
            </div>
            <div className='italic pt-2 font-arimo'>{article.date}</div>
            <h1 className='text-center lg:text-4xl pt-8 font-arimo'>
              {article.content}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}
