import type { ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import type { FEATURES } from '@safe-global/safe-gateway-typescript-sdk'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './index.module.css'
import { hasFeature } from '@/utils/chains'
import { useCurrentChain } from '@/hooks/useChains'
import useLocalStorage from '@/services/local-storage/useLocalStorage'
import { useRouter } from 'next/router'
import { selectAllAddressBooks } from '@/store/addressBookSlice'
import { useAppSelector } from '@/store'

const WARNING_BANNER = 'WARNING_BANNER'

const BANNERS: Record<string, ReactElement | string> = {
  '*': (
    <>
      <b>lux.finance</b> is the official URL for LUX Safe.
    </>
  ),
}

const PsaBanner = (): ReactElement | null => {
  const chain = useCurrentChain()
  const banner = chain ? BANNERS[chain.chainId] || BANNERS['*'] : undefined
  const isEnabled = chain && hasFeature(chain, WARNING_BANNER as FEATURES)
  const [closed = false, setClosed] = useLocalStorage<boolean>(`${WARNING_BANNER}_closed`)

  // Address books on all chains
  const ab = useAppSelector(selectAllAddressBooks)

  const showBanner = Boolean(isEnabled && banner && !closed && isEmpty(ab))

  const onClose = () => {
    setClosed(true)
  }

  useEffect(() => {
    const className = 'psaBanner'
    document.documentElement.classList?.toggle(className, showBanner)
    return () => document.documentElement.classList?.remove(className)
  }, [showBanner])

  return showBanner ? (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.content}>{banner}</div>

        <IconButton className={styles.close} onClick={onClose} aria-label="dismiss announcement banner">
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  ) : null
}

export default PsaBanner
