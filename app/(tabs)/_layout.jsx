import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { AuthProvioder, useAuth } from '../../contexts/AuthContext'

const _layout = () => {
  return (
    <AuthProvioder>
      <MainLayout/>
    </AuthProvioder>
  )
}

const MainLayout = () =>{
  const {setAuth} = useAuth();

  useEffect(()=>{
    
  })
  return(
    <Stack
      screenOptions={{
        headerShown:false
      }}
    />
  )
}

export default _layout