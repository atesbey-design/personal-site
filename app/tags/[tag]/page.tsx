
import Link from 'next/link';
const article = [
    {
      date: '13/01/2023',
      content: 'Rust Programlama S0B1:Temeller',
      title: 'rust-programlama-s0b1-temeller',
      tags : ['rust', 'blockchain'],
    },
    {
      date: '13/03/2023',
      content: 'Rust ile Vigenere’nin Hakkını Verme',
      title: 'rust-ile-vigenere-nin-hakkini-verme',
      tags : ['rust'],
    },
    {
      date: '23/01/2023',
      content: 'Rust İle Sezar’ın Hakkını Verme',
      title: 'rust-ile-sezar-nin-hakkini-verme',
      tags: ['rust', 'selcukchain'],
    },
    {
      date: '01/02.2023',
      content: 'Rust’ta Blockchain Simülasyonu',
      title: 'rustta-blockchain-simulasyonu',
      tags: ['crptology', 'blockchain'],
    },
    {
      date: '16/02/2023',
      content: 'Rust’ta Merge Sort Algoritması',
      title: 'rustta-merge-sort-algoritmasi',
      tags: ['rust', 'programming'],
    },
    {
      date: '02/01/2023',
      content: 'RUST : HashMap ve Hashing',
      title: 'rust-hashmap-ve-hashing',
        tags: ['rust', 'blockchain'],
    },
    {
      date: '10/12/2022',
      content: 'Rust: Ownership’i Anlamak',
      title: 'rust-ownershipi-anlamak',
      tags: ['rust', 'cryptology'],
    },
    {
      date: '10/12/2022',
      content: 'Rust: Ownership’i Anlamak',
      title: 'rust-ownershipi-anlamak',
      tags: ['rust', 'programming'],
    }
  ]


const Page = ({params} : {
    params: {
        tag: string;
    }
}) => {

    console.log('params', params)
        

    return (
        <div>
           {article.map((article , index) => (
            <div key={index}>
                {article.tags.includes(params.tag) && (
                <div key={index} className='flex flex-row space-x-4 font-arimo text-lg'>
                    <div className='italic'>{article.date}</div>
                    <Link
                        href={`/read/${article.title}`}
                        className='text-blue-300 underline visited:text-purple-400'
                    >
                        {article.content}
                    </Link>
                </div>
                )}
            </div>
           ))}
        </div>
    );
           }
export default Page;
