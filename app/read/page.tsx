'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

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

  const exampleMarkdown = `
<p>Rust programlama dili, 2010 yılında Mozilla Vakfı tarafından geliştirilmeye başlanan bir genel amaçlı sistem programlama dilidir. Güvenli, hızlı ve güvenilir olması hedeflenmiştir. Rust, C ve C++ gibi düşük seviyeli dillerin hız ve güvenliğini, yüksek seviyeli dillerin kolaylık ve üretkenliğiyle birleştirmeyi amaçlar.</p><p>Yazılımcıların evi haline gelen StackOverflow’un geliştirici anketlerinde ise “en çok sevilen yazılım dili” özelliğini uzun zamandır elinde bulundurmakta.</p><figure><img alt="StackOverFlow survey" src="https://cdn-images-1.medium.com/max/196/1*GeMqQPQ-38zRS1bnqDWj3g.png" /></figure><h3>Rust Dilinin Yapısı</h3><p>Rust’un dil yapısı, diğer programlama dillerine göre bazı farklılıklar gösterir. Bu farklılıklar, Rust’un güvenli, hızlı ve güvenilir bir dil olarak tasarlanmasından kaynaklanmaktadır.</p><p>Rust’un ana özellikleri şunlardır:</p><h3>Sahiplik sistemi (Ownership system):</h3><p>Rust programlama dilinin en temel özelliklerinden biridir. Ownership sistemi, her bellek parçasının yalnızca tek bir değişkene ait olabileceğini ve değişkenin kapsamı sona erdiğinde bellek parçasının otomatik olarak serbest bırakılacağını garanti eder.</p><p>Bu, bellek hatalarını ve segmantasyon hatalarını önlemeye yardımcı olur. Ownership sistemi, bir değişkenin bellek parçasına sahip olduğu anlamına gelir. Ownership, değişkenin kapsamı sona erdiğinde bellek parçasının otomatik olarak serbest bırakılmasını sağlar. Bir değişken, başka bir değişkene atanarak veya bir değişkenin kapsamı sona erdiğinde sahipliğini kaybeder.</p><p><strong>Ownership sistemi, iki ana kurala dayanır:</strong></p><p><strong>1-Her bellek parçasının yalnızca tek bir sahibi olabilir.</strong></p><p><strong>2-Bir değişkenin kapsamı sona erdiğinde, değişkenin sahibi olduğu tüm bellek parçaları otomatik olarak serbest bırakılır.</strong></p><p>Bu kurallar, Rust’un güvenli bir dil olarak tasarlanmasını sağlar. Bellek hataları ve segmantasyon hataları, genellikle bir değişkenin birden fazla sahibinin olması veya bir değişkenin kapsamı sona erdikten sonra hala kullanılması sonucu ortaya çıkar. Ownership sistemi, bu tür hataları önleyerek Rust’un güvenli bir dil olmasını sağlar.</p><p>Ownership sistemi, ilk başta karmaşık gibi görünebilir, ancak aslında oldukça basittir. Bu sistemi anlamak için, aşağıdaki temel kavramları bilmek gerekir:</p><p><strong>Owner: </strong>Owner, bir bellek parçasının sahibi olan değişkendir.</p><p><strong>Borrowing:</strong> Borrowing, bir değişkenin değerini geçici olarak kopyalamadan kullanmayı sağlar.</p><p><strong>Referance</strong>: Referance, bir değişkenin bellek adresini saklar ve değişkenin değerine doğrudan erişilmesini sağlar.</p><p>Ownership sistemi, bu kavramlar kullanılarak uygulanır.</p><p>Örneğin, bir değişken bir bellek parçasına sahip olduğunda, değişkenin kapsamı sona erdiğinde bellek parçası otomatik olarak serbest bırakılır. Ancak, bir değişken bir bellek parçasını ödünç aldığında, bellek parçası ödünç alan değişkenin kapsamı sona erdiğinde serbest bırakılmaz. Bunun yerine, bellek parçası sahip olan değişkenin kapsamı sona erdiğinde serbest bırakılır.</p><h3><strong>Tür sistemi (type system) :</strong></h3><p>Rust programlama dilinin temel özelliklerinden biri olan tür sistemi, değişkenlerin türlerini açıkça belirtmeyi gerektirir. Bu, derleyicinin tür uyumsuzluklarını ve diğer potansiyel hataları tespit etmesini sağlar. Rust’un tür sistemi, statik olarak kontrol edilen bir türdür. Bu, tür hatalarının derleme zamanında tespit edilmesini sağlar ve programın çalıştırılma zamanında tür hatalarının oluşmasını önler.</p><p><strong>Tür:</strong>Değişkenin veya ifadenin değerinin türünü belirtir.</p><p><strong>Tür uyumluluğu:</strong>Tür uyumluluğu, iki türün birbirleriyle uyumlu olup olmadığını belirler.</p><p><strong>Tür dönüştürme:</strong>Bir değerin bir türden başka bir türe dönüştürülmesini sağlar.</p><h3><strong>Rust Kurulumu:</strong></h3><p><strong>macOS</strong></p><p>Rustu macOS,Linux temelli bir işletim sisteminde yazacaksanız aşağıdaki komutu yazmanız yeterli olacaktır:</p><pre>curl https://sh.rustup.rs -sSf | sh</pre><p><strong>Windows</strong></p><p>Windows işletim sisteminde herhangi bir Linux dağıtıcısı kullanarak aşağıdaki komut ile Rustu kurabilirsiniz:Örneğin chocolatey için</p><pre>choco install rustup.install</pre><h3><strong>Proje oluşturma:</strong></h3><p>Rust paketlerini yönetmek için Cargo aracı kullanılır. Rust’ın doğru şekilde kurulmuş olması durumunda, Cargo’nun sürümü de yazdırılacaktır.</p><pre>cargo new <projeAdi></pre><p>Yukarıdaki komut ile örnek bir Rust projesi oluşturulacaktır. Bu komut sonucu aşağıdaki yapıya benzer bir file structure oluşacaktır.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/297/1*Tj3QCLy2e1L2CYoheHelew.png" /></figure><p>Yukarıdaki yapıda bulunan dosyaların ne işe yaradığı aşağıda bulunmaktadır:</p><p><strong>Cargo.toml</strong>:Bu dosya, projenin meta verilerini içerir. Projenin adı, sürümü, bağımlılıkları ve diğer yapılandırma seçenekleri gibi bilgiler bu dosyada bulunur.</p><p><strong>src/:</strong>Bu dizin, projenin kaynak kodunu içerir.</p><p><strong>main.rs:</strong>Bu dosya, projenin ana kod dosyasıdır. Projenin giriş noktası olan <strong>main</strong> fonksiyonu bu dosyada bulunur.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*8QWzSH7U_wjMcr_ev1R4dA.png" /><figcaption>,</figcaption></figure><p>Birsonraki yazıda Rust ile değişkenlere geçiş yapıyor olacağız.</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=d29292f8a6f7" width="1" height="1" alt="">""<p>Rust programlama dili, 2010 yılında Mozilla Vakfı tarafından geliştirilmeye başlanan bir genel amaçlı sistem programlama dilidir. Güvenli, hızlı ve güvenilir olması hedeflenmiştir. Rust, C ve C++ gibi düşük seviyeli dillerin hız ve güvenliğini, yüksek seviyeli dillerin kolaylık ve üretkenliğiyle birleştirmeyi amaçlar.</p><p>Yazılımcıların evi haline gelen StackOverflow’un geliştirici anketlerinde ise “en çok sevilen yazılım dili” özelliğini uzun zamandır elinde bulundurmakta.</p><figure><img alt="StackOverFlow survey" src="https://cdn-images-1.medium.com/max/196/1*GeMqQPQ-38zRS1bnqDWj3g.png" /></figure><h3>Rust Dilinin Yapısı</h3><p>Rust’un dil yapısı, diğer programlama dillerine göre bazı farklılıklar gösterir. Bu farklılıklar, Rust’un güvenli, hızlı ve güvenilir bir dil olarak tasarlanmasından kaynaklanmaktadır.</p><p>Rust’un ana özellikleri şunlardır:</p><h3>Sahiplik sistemi (Ownership system):</h3><p>Rust programlama dilinin en temel özelliklerinden biridir. Ownership sistemi, her bellek parçasının yalnızca tek bir değişkene ait olabileceğini ve değişkenin kapsamı sona erdiğinde bellek parçasının otomatik olarak serbest bırakılacağını garanti eder.</p><p>Bu, bellek hatalarını ve segmantasyon hatalarını önlemeye yardımcı olur. Ownership sistemi, bir değişkenin bellek parçasına sahip olduğu anlamına gelir. Ownership, değişkenin kapsamı sona erdiğinde bellek parçasının otomatik olarak serbest bırakılmasını sağlar. Bir değişken, başka bir değişkene atanarak veya bir değişkenin kapsamı sona erdiğinde sahipliğini kaybeder.</p><p><strong>Ownership sistemi, iki ana kurala dayanır:</strong></p><p><strong>1-Her bellek parçasının yalnızca tek bir sahibi olabilir.</strong></p><p><strong>2-Bir değişkenin kapsamı sona erdiğinde, değişkenin sahibi olduğu tüm bellek parçaları otomatik olarak serbest bırakılır.</strong></p><p>Bu kurallar, Rust’un güvenli bir dil olarak tasarlanmasını sağlar. Bellek hataları ve segmantasyon hataları, genellikle bir değişkenin birden fazla sahibinin olması veya bir değişkenin kapsamı sona erdikten sonra hala kullanılması sonucu ortaya çıkar. Ownership sistemi, bu tür hataları önleyerek Rust’un güvenli bir dil olmasını sağlar.</p><p>Ownership sistemi, ilk başta karmaşık gibi görünebilir, ancak aslında oldukça basittir. Bu sistemi anlamak için, aşağıdaki temel kavramları bilmek gerekir:</p><p><strong>Owner: </strong>Owner, bir bellek parçasının sahibi olan değişkendir.</p><p><strong>Borrowing:</strong> Borrowing, bir değişkenin değerini geçici olarak kopyalamadan kullanmayı sağlar.</p><p><strong>Referance</strong>: Referance, bir değişkenin bellek adresini saklar ve değişkenin değerine doğrudan erişilmesini sağlar.</p><p>Ownership sistemi, bu kavramlar kullanılarak uygulanır.</p><p>Örneğin, bir değişken bir bellek parçasına sahip olduğunda, değişkenin kapsamı sona erdiğinde bellek parçası otomatik olarak serbest bırakılır. Ancak, bir değişken bir bellek parçasını ödünç aldığında, bellek parçası ödünç alan değişkenin kapsamı sona erdiğinde serbest bırakılmaz. Bunun yerine, bellek parçası sahip olan değişkenin kapsamı sona erdiğinde serbest bırakılır.</p><h3><strong>Tür sistemi (type system) :</strong></h3><p>Rust programlama dilinin temel özelliklerinden biri olan tür sistemi, değişkenlerin türlerini açıkça belirtmeyi gerektirir. Bu, derleyicinin tür uyumsuzluklarını ve diğer potansiyel hataları tespit etmesini sağlar. Rust’un tür sistemi, statik olarak kontrol edilen bir türdür. Bu, tür hatalarının derleme zamanında tespit edilmesini sağlar ve programın çalıştırılma zamanında tür hatalarının oluşmasını önler.</p><p><strong>Tür:</strong>Değişkenin veya ifadenin değerinin türünü belirtir.</p><p><strong>Tür uyumluluğu:</strong>Tür uyumluluğu, iki türün birbirleriyle uyumlu olup olmadığını belirler.</p><p><strong>Tür dönüştürme:</strong>Bir değerin bir türden başka bir türe dönüştürülmesini sağlar.</p><h3><strong>Rust Kurulumu:</strong></h3><p><strong>macOS</strong></p><p>Rustu macOS,Linux temelli bir işletim sisteminde yazacaksanız aşağıdaki komutu yazmanız yeterli olacaktır:</p><pre>curl https://sh.rustup.rs -sSf | sh</pre><p><strong>Windows</strong></p><p>Windows işletim sisteminde herhangi bir Linux dağıtıcısı kullanarak aşağıdaki komut ile Rustu kurabilirsiniz:Örneğin chocolatey için</p><pre>choco install rustup.install</pre><h3><strong>Proje oluşturma:</strong></h3><p>Rust paketlerini yönetmek için Cargo aracı kullanılır. Rust’ın doğru şekilde kurulmuş olması durumunda, Cargo’nun sürümü de yazdırılacaktır.</p><pre>cargo new <projeAdi></pre><p>Yukarıdaki komut ile örnek bir Rust projesi oluşturulacaktır. Bu komut sonucu aşağıdaki yapıya benzer bir file structure oluşacaktır.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/297/1*Tj3QCLy2e1L2CYoheHelew.png" /></figure><p>Yukarıdaki yapıda bulunan dosyaların ne işe yaradığı aşağıda bulunmaktadır:</p><p><strong>Cargo.toml</strong>:Bu dosya, projenin meta verilerini içerir. Projenin adı, sürümü, bağımlılıkları ve diğer yapılandırma seçenekleri gibi bilgiler bu dosyada bulunur.</p><p><strong>src/:</strong>Bu dizin, projenin kaynak kodunu içerir.</p><p><strong>main.rs:</strong>Bu dosya, projenin ana kod dosyasıdır. Projenin giriş noktası olan <strong>main</strong> fonksiyonu bu dosyada bulunur.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*8QWzSH7U_wjMcr_ev1R4dA.png" /><figcaption>,</figcaption></figure><p>Birsonraki yazıda Rust ile değişkenlere geçiş yapıyor olacağız.</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=d29292f8a6f7" width="1" height="1" alt="">

  `
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

        <div dangerouslySetInnerHTML={{ __html: exampleMarkdown }} />
      </div>
    </div>
  )
}

export default page
