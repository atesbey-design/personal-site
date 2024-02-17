'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
let Parser = require('rss-parser')
let parser = new Parser()

const tags = ['blockchain', 'rust', 'cryptology', 'selcukchain']
const article = [
  {
    id: 1,
    date: '13/01/2023',
    content: 'Rust Programlama S0B1:Temeller',
    title: 'rust-programlama-s0b1-temeller'
  },
  {
    id: 2,
    date: '13/03/2023',
    content: 'Rust ile Vigenere’nin Hakkını Verme',
    title: 'rust-ile-vigenere-nin-hakkini-verme'
  },
  {
    id: 3,
    date: '23/01/2023',
    content: 'Rust İle Sezar’ın Hakkını Verme',
    title: 'rust-ile-sezar-nin-hakkini-verme'
  },
  {
    id: 4,
    date: '01/02.2023',
    content: 'Rust’ta Blockchain Simülasyonu',
    title: 'rustta-blockchain-simulasyonu'
  },
  {
    id: 5,
    date: '16/02/2023',
    content: 'Rust’ta Merge Sort Algoritması',
    title: 'rustta-merge-sort-algoritmasi'
  },
  {
    id: 6,
    date: '02/01/2023',
    content: 'RUST : HashMap ve Hashing',
    title: 'rust-hashmap-ve-hashing'
  },
  {
    id: 7,
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak'
  },
  {
    id: 8,
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak'
  }
]

interface IArticle {
  categories: string[]
  content: {
    encoded: string
    encodedSnippet: string
  }
  creator: string
  dc: {
    creator: string
  }
  guid: string
  isoDate: string
  link: string
  pubDate: string
  title: string
}

const Page = ({ params }: any) => {
  const [articleData, SetArticleData] = useState<IArticle[]>([])

  useEffect(() => {
    ;(async () => {
      let feed = await parser.parseURL('https://medium.com/feed/@AtesBagcabasi')
      // SetArticleData(feed.items[0]['content:encoded'])
      SetArticleData(feed.items)
    })()
  }, [])
  console.log('article data ', articleData)

  function formatTitleForURL (title: any) {
    return title.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <div>
      {articleData?.map((article: any, index: any) => (
        <div key={index} className='flex flex-row'>
          <div className='italic'>
            {new Date(article.isoDate).toLocaleString('en-US').split(',')[0]}
          </div>
          <Link
            href={`/read/${formatTitleForURL(article.title)}`}
            className='text-blue-300  underline visited:text-purple-400 pl-2'
          >
            {article.title}
          </Link>
        </div>
      ))}

      <div className='flex flex-row mt-24'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='text-blue-300  underline visited:text-purple-400 pr-2'
          >
            <Link href={`/tags/${tag}`}>#{tag}</Link>
          </div>
        ))}

        {/* <div dangerouslySetInnerHTML={{ __html: articleData }} /> */}
      </div>
    </div>
 
 )
}

export default Page
