'use client'

// 'use client' satırı gerekli değil ve silinebilir

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
const Article = ({
  params
}: {
  params: {
    title: string
  }
}) => {
  console.log('yeni ', params)
  // interface Post {
  //   id: string
  //   title: string
  //   content: string
  //   tags: string[]
  //   created_at: string
  //   deleted_at: string | null
  // }
  interface Article {
    author: string
    category: string[]
    content: string
    content_encoded: string
    created: number
    enclosures: any[] // Buraya uygun bir tip verisi ekleyebilirsiniz
    link: string
    media: any // Buraya uygun bir tip verisi ekleyebilirsiniz
    published: number
    title: string
  }

  // Örnek kullanım:
  const exampleArticle: Article = {
    author: 'Ateş Bağçabaşı',
    category: ['rust', 'technology', 'smart-contracts', 'ownership'],
    content: '<p>Rust programlarında bellek yönetimini nasıl dü',
    content_encoded: '<p>Rust programlarında bellek yönetimini nasıl dü',
    created: 1670678479000,
    enclosures: [],
    link: 'https://medium.com/@AtesBagcabasi/ownershipi-anlamak-b82dd9e27aac?source=rss-5b5d55c62ef1------2',
    media: {},
    published: 1670678479000,
    title: 'Rust: Ownership’i Anlamak'
  }

  const [articleData, setArticleData] = useState([])
  const fetchData = async () => {
    try {
      const url = new URL(
        'https://v1.nocodeapi.com/atesh/medium/dXgJqSBhxNdQgOlX'
      )
      const params: Record<string, string> = {
        // Buraya gerekli parametreleri ekleyin
      }

      url.search = new URLSearchParams(params).toString()

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: headers
      }

      const response = await fetch(url, requestOptions)
      const result = await response.json()

      setArticleData(result)
    } catch (error) {
      console.error('Error fetching article data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log('Article data:', articleData)

  return (
    <div>
      <div>
        {/* {articleData?.map((article: any) => (
          <div key={article.id}>
            <div className='italic pt-2 font-arimo'>{article.created_at}</div>
            <h1 className='text-center lg:text-4xl pt-8 font-arimo'>
              {article.title}
            </h1>
            <Markdown>{article.content}</Markdown>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Article
