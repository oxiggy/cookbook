import { memo } from 'react';
import { Box, Button, Flex, Stack, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton/CustomButton.jsx';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a aliquam justo, quis lacinia neque. Quisque vitae ornare felis, vel dignissim massa. Donec id vulputate nisl. Phasellus a ante eu nulla aliquet blandit.'

const CookingStep = () => {
  const haveList = false;

  return (
    <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 400, margin: '0 auto' }}>
      <Box style={{ position: 'relative', minHeight: 60 }}>
        <Box
          component={NavLink}
          to='/recipes'
          style={{
            position: 'absolute',
            top: 0, left: 30,
            height: '60px',
            width: '60px',
            backgroundColor: 'var(--mantine-color-tertiary-0)',
            borderRadius: '0 0 4px 4px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_433_136)">
              <path d="M5.5 34.8334C8.00832 33.3852 10.8536 32.6228 13.75 32.6228C16.6464 32.6228 19.4917 33.3852 22 34.8334C24.5083 33.3852 27.3536 32.6228 30.25 32.6228C33.1464 32.6228 35.9917 33.3852 38.5 34.8334" stroke="#494879" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 11C8.00832 9.55183 10.8536 8.78943 13.75 8.78943C16.6464 8.78943 19.4917 9.55183 22 11C24.5083 9.55183 27.3536 8.78943 30.25 8.78943C33.1464 8.78943 35.9917 9.55183 38.5 11" stroke="#494879" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 11V34.8333" stroke="#494879" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 11V34.8333" stroke="#494879" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38.5 11V34.8333" stroke="#494879" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_433_136">
                <rect width="44" height="44" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Box>
      </Box>
      {haveList ? (
        <>
          <Box>content title</Box>
          <Box>content list</Box>
        </>
      ) : (
        <>
          <Text lineClamp={4}>{description}</Text>
          <Box>content image</Box>
        </>
      )}
    <Stack>
      <CustomButton size='xl'>Next</CustomButton>
      <Button variant='default'>Skip</Button>
    </Stack>
      <Box
        bg='primary.0'
        style={{
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
    </Box>
  )
}

export default memo(CookingStep);