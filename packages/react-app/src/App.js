import React from "react"
import {useEthers} from '@usedapp/core';

import { usePools } from './hooks'
import styles from './styles';
import { sumoswapLogo } from './assets'
import { Exchange, Loader, WalletButton } from './components'
 
const App = () => {

  const { account } = useEthers();
  const [loading, pools] = usePools();


  return ( <div className={styles.container}>
    <div className={styles.innerContainer}>
  <header className={styles.header}>
      <img 
      src={sumoswapLogo}
      alt="sumoswap logo"
      className="w-64 h-64 object-contain"
      />

      <WalletButton />
  </header>

    <div className={styles.exchangeContainer}>
      <h1 className={styles.headTitle}>CHIKODEX</h1>
      <p className={styles.subTitle}>Exchange tokens in seconds</p>

      <div className={styles.exchangeBoxWrapper}>
        <div className={styles.exchangeBox}>
          <div className="pink_gradient"/>
          <div className={styles.exchange}>
           {account ? (
             loading? (
               <Loader title="Loading pools, please wait!"/>
             ) : <Exchange pools={pools} />
           ) : <Loader title="Please connect your wallet" /> }
          </div>
          <div className="blue_gradient" />
          
          </div>
        </div>
       </div>
      </div>
    </div>
 )
}

export default App;
