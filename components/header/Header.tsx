import HeaderLinks from '@/components/header/HeaderLinks'
// import Link from 'next/link'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { ThemedButton } from '../ThemedButton'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const t = useTranslations('Header')
  return (
    <header className='py-10'>
      <div className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Link href='/' className='flex items-center space-x-1 font-bold text-2xl'>
              {/* <Image alt={siteConfig.name} src='/logo.svg' className='w-8 h-8' width={32} height={32} /> */}
              <span className='text-gray-950 dark:text-gray-300'>{t('title1')}</span>
              <span className='text-blue-600'>{t('title2')}</span>
            </Link>
            <div className='hidden md:flex md:gap-x-6'></div>
          </div>

          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <LanguageSwitcher />
            <HeaderLinks />
            <ThemedButton />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
