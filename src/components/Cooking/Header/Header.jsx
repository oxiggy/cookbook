import { Box } from '@mantine/core';
import { NavLink } from 'react-router-dom';
//files
import RecipesIcon from '@/assets/recipes.svg?react';

const CookingHeader = () => {
  return (
    <Box style={{ position: 'relative', flexShrink: 0, minHeight: 60 }}>
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
        <RecipesIcon />
      </Box>
    </Box>
  )
}

export default CookingHeader;