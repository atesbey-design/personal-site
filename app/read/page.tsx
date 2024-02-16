import Link from 'next/link'
import React from 'react'

const article = [
  {
    id: 1,
    date: '13/01/2023',
    content: 'Rust Programlama S0B1:Temeller',
    title: 'rust-programlama-s0b1-temeller',
  },
  {
    id: 2,
    date: '13/03/2023',
    content: 'Rust ile Vigenere’nin Hakkını Verme',
    title: 'rust-ile-vigenere-nin-hakkini-verme',
  },
  {
    id: 3,
    date: '23/01/2023',
    content: 'Rust İle Sezar’ın Hakkını Verme',
    title: 'rust-ile-sezar-nin-hakkini-verme',
  },
  {
    id: 4,
    date: '01/02.2023',
    content: 'Rust’ta Blockchain Simülasyonu',
    title: 'rustta-blockchain-simulasyonu',
  },
  {
    id: 5,
    date: '16/02/2023',
    content: 'Rust’ta Merge Sort Algoritması',
    title: 'rustta-merge-sort-algoritmasi',
  },
  {
    id: 6,
    date: '02/01/2023',
    content: 'RUST : HashMap ve Hashing',
    title: 'rust-hashmap-ve-hashing',
  },
  {
    id: 7,
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak',
  },
  {
    id: 8,
    date: '10/12/2022',
    content: 'Rust: Ownership’i Anlamak',
    title: 'rust-ownershipi-anlamak',
  }
]
const page = () => {
  return (
    <div>
      {article.map((article: any,  index : any) => (
        <div key={index} className='flex flex-row space-x-4 font-arimo text-lg'>
          <div className='italic'>{article.date}</div>
          <Link
            href={`/read/${article.title}`}
            className='text-blue-300 underline visited:text-purple-400'
          >
            {article.content}
          </Link>
        </div>
      ))}
    </div>
  )
}
export { article }
export default page
