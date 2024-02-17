'use client'

// 'use client' satırı gerekli değil ve silinebilir

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
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
      // setArticleData(feed.items[0]['content:encoded'])
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
        <h1>{selectedArticle?.title}</h1>
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
