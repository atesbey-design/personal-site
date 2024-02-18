'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
let Parser = require('rss-parser')
let parser = new Parser()

const Article = ({
  params
}: {
  params: {
    title: string
  }
}) => {
  const [articleData, SetArticleData] = useState<any>([])
  const [selectedArticle, SetSelectedArticle] = useState<any>({})
  function formatTitleForURL (title: any) {
    return title.replace(/\s+/g, '-').toLowerCase()
  }

  useEffect(() => {
    ;(async () => {
      let feed = await parser.parseURL('https://medium.com/feed/@AtesBagcabasi')
      SetArticleData(feed.items)

      const article = feed.items.find((item: any) => {
        console.log(
          'item.title ',
          encodeURIComponent(formatTitleForURL(item.title))
        )
        console.log('params.title ', encodeURIComponent(params.title))

        return (
          encodeURIComponent(formatTitleForURL(item.title)) === params.title
        )
      })
      SetSelectedArticle(article)
    })()
  }, [])
  console.log('selectedArticle data ', selectedArticle)

  return (
    <div>
      <div>
        <div className='italic'>
          {selectedArticle?.pubDate &&
            new Date(selectedArticle?.pubDate)
              .toLocaleString('en-US')
              .split(',')[0]}
        </div>
        <div className='flex flex-row py-4'>
          <div>Tags:</div>
          {selectedArticle?.categories?.map((tag: any, index: any) => (
            <div
              key={index}
              className='text-blue-300  underline visited:text-purple-400 pr-2'
            >
              <Link href={`/tags/${tag}`}>#{tag}</Link>
            </div>
          ))}
        </div>
        <h1 className='text-center lg:text-2xl font-bold py-4'>
          {selectedArticle?.title}
        </h1>
        <div>
          {selectedArticle['content:encoded'] && (
            <div
              dangerouslySetInnerHTML={{
                __html: selectedArticle['content:encoded']
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Article
