import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className=' border-b-2 w-full pb-2'>
        <div className='lg:leading-loose font-arimo lg:text-lg'>
          I am one of the{' '}
          <Link className='text-blue-300 underline' href={'/'}>
            Rust Language
          </Link>{' '}
          maintainers, with a primary focus on the compiler bootstrapping
          process. Additionally, I am involved in maintaining the
          <Link className='text-blue-300 underline' href={'/'}>
            Komodo Platform
          </Link>{' '}
          and many other open source projects. Beyond work, Im obsessed with
          collecting watches and a huge fan of the sports of snooker and boxing.{' '}
          <br /> <br /> The opinions and criticisms expressed here are solely my
          personal thoughts and do not represent the views of any organizations,
          companies, or projects I am associated with.
        </div>
      </div>
      <div className='flex flex-row flex-wrap space-x-3 lg:text-lg'>
        <Link className='text-blue-300 underline lg:pr-2 pr-1' href={'/'}>
          telegram
        </Link>
        |
        <Link className='text-blue-300 underline lg:pr-2 pr-1' href={'/'}>
          e-mail
        </Link>
        |
        <Link
          className='text-blue-300 underline lg:pr-2 pr-1'
          href={'https://twitter.com/ebrartamer23'}
        >
          X
        </Link>
        |
        <Link
          className='text-blue-300 underline lg:pr-2 pr-1'
          href={'https://www.linkedin.com/in/ebrar-tamer/'}
        >
          linkedin
        </Link>
        |
        <Link
          className='text-blue-300 underline lg:pr-2 pr-1'
          href={'https://github.com/ebrartamer'}
        >
          github
        </Link>
        |
        <Link className='text-blue-300 underline' href={'/'}>
          rss
        </Link>
      </div>
    </>
  )
}
