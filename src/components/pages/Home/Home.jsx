import { memo } from 'react';
import { Text, Center } from '@mantine/core';

const Mark = ({children}) => {
  return (
    <Text variant='gradient' gradient={{ from: 'teal.5', to: 'grape.3', deg: 135 }} component='span' fw={700} fz='20vw'>
      {children}
    </Text>
  )
}

const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#EAF4FF'}}>
      <Center h='100%'>
        <Text fw={700} fz='20vw' w='fit-content' c='dark.9' style={{ userSelect: 'none' }}>
          <Mark>U</Mark>c<Mark>U</Mark>kb<Mark>U</Mark>k
        </Text>
      </Center>
    </div>
  )
}

export default memo(Home);