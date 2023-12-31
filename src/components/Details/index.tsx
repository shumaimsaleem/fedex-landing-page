import React from 'react'
import styles from './Details.module.sass'
import s1 from '/public/assets/images/s1.png'
import s2 from '/public/assets/images/s2.png'
import s3 from '/public/assets/images/s3.png'
import Image from 'next/image'
const Details = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        It’s <span className={styles.orangeText}>never been easier</span> to get{' '}
        <br /> government documents in a hurry
      </h1>
      <section className={styles.section}>
        <div className={styles.sectionleft}>      
          <Image src={s1} alt="passport application" />
        </div>
        
          <div className={styles.sectionright}>
            <span>1</span>
            <h2 className={styles.sectionheading}>
              Choose which <br /> documents you need
            </h2>
            <p className={styles.sectiontext}>
              Whether you need a passport, new titles for your car or a <br />{' '}
              travel visa, you can get them all quickly through our <br />{' '}
              partnership with HelloGov.
            </p>
          </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionright}>
          <span>2</span>
          <h2 className={styles.sectionheading}>
            Complete your <br /> application (it’s easy!)
          </h2>
          <p className={styles.sectiontext}>
            Thanks to smart AI and super-simple applications, it’s never <br />{' '}
            been easier to complete government forms and get them <br />{' '}
            approved first time. <br /> <br /> Got any questions? Just ask your
            personal application <br /> assistant!{' '}
          </p>
        </div>

        <div className={styles.sectionleft}>      
              <Image src={s2} alt="info" />
        </div>      
      </section>
      <section className={styles.section}>
        <div className={styles.sectionleft}>      
          <Image src={s3} alt="driver license" />
        </div>
        <div className={styles.sectionright}>
          <span>3</span>
          <h2 className={styles.sectionheading}>
          Use our customer portal to <br/> keep track of everything.
          </h2>
          <p className={styles.sectiontext}>
            Whether you need a passport, new titles for your car or a <br />{' '}
            travel visa, you can get them all quickly through our <br />{' '}
            partnership with HelloGov.
          </p>
        </div>
        </section>
    </div>
  )
}

export default Details
