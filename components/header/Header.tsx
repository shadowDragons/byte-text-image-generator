import LogoSVG from '@/components/icons/logo'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { ThemedButton } from '../ThemedButton'
import HeaderLinks from './HeaderLinks'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
        <nav className='flex h-14 items-center justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Link href='/' className='flex items-center space-x-2'>
              <LogoSVG className='h-6 w-6' />
              <span className='inline-block font-bold text-xl sm:hidden'>{t('title1')}</span>
              <div className='hidden sm:flex items-center space-x-2'>
                <span className='font-bold text-xl text-gray-950 dark:text-gray-300'>{t('title1')}</span>
                <span className='font-bold text-xl text-blue-600'>{t('title2')}</span>
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-x-2 md:gap-x-8'>
            <HeaderLinks />
            <div className='w-32 sm:w-28'>
              <LanguageSwitcher />
            </div>
            <ThemedButton />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
