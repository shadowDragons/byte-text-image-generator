import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { ThemedButton } from '../ThemedButton'
import HeaderLinks from './HeaderLinks'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className='py-10'>
      <div className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <Link href='/' className='flex items-center space-x-1 font-bold text-2xl'>
              <span className='text-gray-950 dark:text-gray-300'>{t('title1')}</span>
              <span className='text-blue-600'>{t('title2')}</span>
            </Link>
          </div>

          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <a
              href='https://github.com/shadowDragons/text2image'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:flex items-center px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5 mr-2' fill='currentColor'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              <span className='font-medium'>GitHub</span>
            </a>
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
