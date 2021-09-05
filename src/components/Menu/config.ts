import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xd2D3C4d6Ecd04C258b8012378A85eF81EEd4683A',
      },
      {
        label: t('Liquidity'),
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xd2D3C4d6Ecd04C258b8012378A85eF81EEd4683A',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
