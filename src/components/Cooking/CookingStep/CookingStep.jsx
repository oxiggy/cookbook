import { memo } from 'react';
import { Button, Stack, Text, rem } from '@mantine/core';
import { AspectRatio } from '@mantine/core';
//files
import CustomButton from '@/components/shared/CustomButton/CustomButton.jsx';

const CookingStep = ({ value, onSubmit }) => {
  const text = value.content.blocks.find((block) => block.type === 'paragraph');
  const image = value.content.blocks.find((block) => block.type === 'image');

  return (
    <Stack style={{ flexGrow: 1, overflow: 'auto' }}>
      <Text
        lineClamp={4}
        dangerouslySetInnerHTML={{ __html:text.data.text }}
        style={{ flexShrink: 0, textAlign: 'center' }}
      />
      <Text c='dimmed' size='sm' ta='center'>{value.description}</Text>
      <AspectRatio ratio={1080 / 720} style={{ flex: `0 0 ${rem(100)}` }}>
        {image && <img src={image.data.url} alt="image" />}
      </AspectRatio>
      <CustomButton size='xl' style={{ flexShrink: 0 }} onClick={onSubmit}>{value.submitButton.name}</CustomButton>
      <Button variant='default' style={{ flexShrink: 0 }}>Skip</Button>
    </Stack>
  )
}

export default memo(CookingStep);