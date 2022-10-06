import React from 'react'
import styles from './index.module.css'
                                                            // As simple as nothing else... just a loading screen to be used 
export default function Loading() {                         // while our actions are requesting the data from the API
  return (
    <div className={styles.divGlobal}>
        <span className={styles.Loading}>Loading...</span>
    </div>
  )
}
