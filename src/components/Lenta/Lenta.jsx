import React from 'react'
import styles from './Lenta.module.css';
import LentaImageContent from './LentaImageContent/LentaImageContent';
import searchimg from '../../svg/iconsearch.svg';
function Lenta() {

    
  return (

    <div className={styles.lentaComponent}>

        <div className={styles.lentaContainer}>

            <div className={styles.lentaSearh}>
                <form>
                    <div className={styles.searchForm}>
                        <input className={styles.searchLenta} type="text" placeholder='Search' />
                        <img src={searchimg} alt={searchimg} className={styles.iconSearch} />
                    </div>
                </form>
            </div>


            <div className={styles.lentaContent}>
    
              <LentaImageContent/>

            </div>

        </div>

    </div>

  )
}

export default Lenta;