import { memo } from 'react';
import { Button } from '@mantine/core';

const CustomButton = ({ progress, danger, children, ...otherProps }) => {
  console.log(progress, 'btn progress');
  console.log(danger, 'btn danger');

  return (
    <Button {...otherProps}>
      {children}
    </Button>
  )
}

export default memo(CustomButton);