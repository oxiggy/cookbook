import { Box, Flex } from '@mantine/core';

const CookingFooter = () => {
  return (
    <Box
      bg='primary.0'
      style={{
        flexShrink: 0,
        marginTop: 'auto',
        color: 'white',
        borderRadius: '8px 8px 0 0',
        padding: '8px',
      }}
    >
      <Flex gap='sm'>
        <Box c='secondary.0'>step1</Box>
        <Box c='tertiary.0'>step2</Box>
        <Box c='secondary.0'>step3</Box>
        <Box c='secondary.0'>step4</Box>
      </Flex>
    </Box>
  )
}

export default CookingFooter;