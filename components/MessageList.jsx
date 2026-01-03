import { useRef, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { theme } from '../constants/theme'
import Message from './Message'

const MessageList = () => {
    const [message, setMessage] = useState([
        {
            user:0,
            time:'12:00',
            content:'Hey'
        },
        {
            user:1,
            time:'12:01',
            content:'Hello'
        },
        {
            user:1,
            time:'12:02',
            content:'How are you?'
        },
        {
            user:0,
            time:'12:03',
            content:'Where are from?'
        },
        {
            user:0,
            time:'12:04',
            content:'What do you do?'
        }
    ])

    const user = useRef(0);
    const scrollView = useRef();
  return (
    <ScrollView style={{backgroundColor:theme.colors.white,flex:1}}
        ref={ref => scrollView.current = ref}
        onContentChange={()=>{
            scrollView.current.scrollToEnd({animated:true})
        }}
    >
      {message.map((message,index)=>(
        <Message key={index} time={message.time} isLeft={message.user !== user.current} message={message.content}/>
      ))}
    </ScrollView>
  )
}

export default MessageList

const styles = StyleSheet.create({})