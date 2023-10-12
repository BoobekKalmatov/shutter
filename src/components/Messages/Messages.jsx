import React, { useState } from 'react';
import ListMessage from './ListMessage/ListMessage';
import styles from './Message.module.css';

function Messages() {

  const [myMessage, setMyMessage] = useState(["hello", ' Beka']);

  const [youMessage, setYouMessage] = useState([
    "hello", ' Maxim'
  ])

  return (
    <>

      <div className={styles.messageComponent}>
        <ListMessage/>

        <div className={styles.chatComponent}>

            <div className={styles.chatContainer}>

                <div className={styles.listBlock}>
                  <h3 className={styles.listBlockName}>Maxim</h3>

                  <p className={styles.listBlockText}>
                    {
                      youMessage.map(text => {
                        return text
                      })
                    }
                  </p>
                </div>

                <div className={styles.myListBlock}>

                    <h3 className={styles.listBlockName}>Beka</h3>

                    <p className={styles.listBlockText}>
                      {
                        myMessage.map(text => {
                          return text
                        })
                      }
                    </p>

                </div>

            </div>

        </div>
      </div>

    </>
  )
}

export default Messages