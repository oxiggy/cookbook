import { memo, useState } from 'react';
import { Box } from '@mantine/core';
//files
import data from '@/data/recipes.js';
import CookingHeader from '@/components/Cooking/Header/Header.jsx';
import CookingFooter from '@/components/Cooking/Footer/Footer.jsx';
import CookingStep from '@/components/Cooking/CookingStep/CookingStep';
//import InitialStep from '@/components/Cooking/InitialStep/InitialStep.jsx';

const Cooking = () => {
  const [step, setStep] = useState(0);

  return (
    <Box style={{ height: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden', margin: '0 auto' }}>
      <CookingHeader />
     {/* <InitialStep />*/}
      <CookingStep
        value={data[0].steps[step]}
        onSubmit={() => setStep(step + 1)}
      />
      <CookingFooter />
    </Box>
  )
}

export default memo(Cooking);