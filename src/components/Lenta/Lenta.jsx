import React from 'react'
import styles from './Lenta.module.css';
import lentatestimg from '../../images/animetestphoto.jpg'

function Lenta() {

    const dataContent = [
        {akaunt: 'beka_2006', id: 1, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 2, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 4, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 5, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 6, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 7, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 8, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 9, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 10, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 11, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 12, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 13, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 14, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 15, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 16, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
        {akaunt: 'beka_2006', id: 17, image: {lentatestimg}, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, consequatur.', hashtags: '#anime #animephoto'},
    ]
  return (

    <div className={styles.lentaComponent}>

        <div className={styles.lentaContainer}>

            <div className={styles.lentaSearh}>
                <form>
                    <div className={styles.searchForm}>
                        <input type="text" placeholder='Search' />
                    </div>
                </form>
            </div>


            <div className={styles.lentaContent}>
    
                {
                    dataContent.map(content => {
                        return (
                            <div className={styles.lentaBlock} id={content.id}>
                                
                            </div>
                        )
                    })
                }

            </div>

        </div>

    </div>

  )
}

export default Lenta;