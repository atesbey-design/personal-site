'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
let Parser = require('rss-parser')
let parser = new Parser()

const Page = ({
  params
}: {
  params: {
    tag: string
  }
}) => {
  console.log('params', params)
  const [articleData, SetArticleData] = useState<any>([])
  const [selectedArticle, SetSelectedArticle] = useState<any>({})
  function formatTitleForURL (title: any) {
    return title.replace(/\s+/g, '-').toLowerCase()
  }

  useEffect(() => {
    ;(async () => {
      let feed = await parser.parseURL('https://medium.com/feed/@AtesBagcabasi')
      SetArticleData(feed.items)
      console.log('feed.items ', feed.items)

      const article = feed.items.find((item: any) => {
        console.log('item.categories ', item.categories)
        return item.categories.find((tag: any) => {
          return tag === params.tag
        })
      })
      SetSelectedArticle(article)
    })()
  }, [])
  console.log('selectedArticle data ', selectedArticle)

  return (
    <div>
      <div>
        <div className='flex flex-row py-4'>
          <div className='italic'>
            {selectedArticle?.pubDate &&
              new Date(selectedArticle?.pubDate)
                .toLocaleString('en-US')
                .split(',')[0]}
          </div>
          <div className='text-blue-300 underline visited:to-purple-600 pl-2'>
            {selectedArticle?.title}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
