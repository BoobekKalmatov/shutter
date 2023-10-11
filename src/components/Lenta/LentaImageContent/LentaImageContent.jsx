import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LentaImageContent.module.css';
import lentatestimg from '../../../images/animetestphoto.jpg';
function LentaImageContent() {

      const dataContent = [
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 1, image:  lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 2, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 4, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 5, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 6, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 7, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 8, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 9, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 10, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 11, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 12, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 13, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 14, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 15, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 16, image: lentatestimg, hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', subscribe: 'подписаться', id: 17, image: lentatestimg, hashtags: '#anime #animephoto'},
    ]

    // const [isHovered, setIsHovered] = useState(false);
    const [hoveredBlock, setHoveredBlock] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredBlock(id)
    }

    const handleMouseLeave = () => {
        setHoveredBlock(null)
    }

  return (
    <div className={styles.LentaContent}>

                {
                    dataContent.map(content => {
                        return (
                            <div onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave} className={styles.lentaBlock} id={content.id}>
                                
                                {hoveredBlock === content.id &&   
                                            (
                                    
                                                <div className={styles.subscribeBlock}>
                                                    <NavLink to='/akk' className={styles.akaunt}>{content.akaunt}</NavLink>
                                                    <button className={styles.subscribeBtn}>{content.subscribe}</button>
                                                </div>
                                            )                                        
                                
                                
                                }
                                <div className={styles.imageBlock}> 
                                    <img src={content.image} className={styles.lentaImg} alt={content.image} />
                                </div>

                            </div>
                        )
                    })
                }

    </div>
  )
}

export default LentaImageContent