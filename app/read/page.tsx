'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
let Parser = require('rss-parser');
let parser = new Parser();

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
const page = ({ params }: any) => {
  console.log('yeni paramsss', params)
  const [articleData, setArticleData] = useState([]) as any

  (async () => {

    let feed = await parser.parseURL('https://medium.com/feed/@AtesBagcabasi');
    console.log(feed);
  
 
  
  })();



  return (
    <div>
      {/* {articleData?.map((article: any) => (
        <div className='flex flex-row' key={article.id}>
          <div className='italic font-arimo lg:text-lg pr-2'>
            {new Date(article.published).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div>
            <Link
              href={`/read/`}
              className=' lg:text-lg  font-arimo pl-4 text-blue-300  underline visited:text-purple-400'
            >
              {article.title}
            </Link>
          </div>
          <ReactMarkdown>{exampleMarkdown}</ReactMarkdown>
        </div>
      ))} */}

      <div className='flex flex-row mt-24'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='text-blue-300  underline visited:text-purple-400 pr-2'
          >
            <Link href={`/tags/${tag}`}>#{tag}</Link>
          </div>
        ))}

        <div dangerouslySetInnerHTML={{ __html: "<>" }} />
      </div>
    </div>
  )
}

export default page
