'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Ates Personal Site',
//   description: 'Come and read my awesome articles!'
// }

let Parser = require('rss-parser')
let parser = new Parser()

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
      SetArticleData(feed.items)
    })()
  }, [])
  console.log('article data ', articleData)

  function formatTitleForURL (title: any) {
    return title.replace(/\s+/g, '-').toLowerCase()
  }
  function filterUniqueValues (arr: any[]): any[] {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index
    })
  }

  return (
    <div>
      {articleData?.map((article: any, index: any) => (
        <div key={index}>
          <div className='flex flex-row'>
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
        </div>
      ))}
      <div className='flex flex-row flex-wrap mt-12 '>
        {filterUniqueValues(
          articleData?.map((article: any) => article.categories).flat()
        ).map((tag: any, index: any) => (
          <div key={index}>
            <Link
              href={`/tags/${tag}`}
              className='text-blue-300 underline pr-2'
            >
              #{tag}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
