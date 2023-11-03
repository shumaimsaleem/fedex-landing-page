import React from 'react'
import styles from './Details.module.sass'
const Details = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}> It’s <span className={styles.orangeText} >never been easier 
                </span> to get <br/> government documents in a hurry
        </h1> 
    </div>
  )
}

export default Details