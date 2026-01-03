import { StyleSheet } from 'react-native'
import ChatHeader from '../../components/ChatHeader'
import ChatInput from '../../components/ChatInput'
import MessageList from '../../components/MessageList'
import ScreenWrapper from '../../components/ScreenWrapper'

const ChatScreen = () => {
  return (
    <ScreenWrapper>
      <ChatHeader/>
      <MessageList/>
      <ChatInput />
    </ScreenWrapper>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})