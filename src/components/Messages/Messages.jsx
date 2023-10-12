import React, { useState } from 'react';
import ListMessage from './ListMessage/ListMessage';
import styles from './Message.module.css';


function Messages() {

  const [myMessage, setMyMessage] = useState([]);
  const [youMessage, setYouMessage] = useState([])

  return (
    <>

      <div className={styles.messageComponent}>
        <ListMessage/>

        <div className={styles.chatComponent}>

            <div className={styles.chatContainer}></div>

        </div>
      </div>

    </>
  )
}

export default Messages