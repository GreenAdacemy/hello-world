import LocalizedStrings from 'react-localization';
import { en } from './locales/en'
import { vi } from './locales/vi'

export const locale = new LocalizedStrings(
  {
    en: en,
    vi: vi
  }
)
