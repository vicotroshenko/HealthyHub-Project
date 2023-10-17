import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useBreakpoints } from '../../hooks/useBreakpoints';

export const ProgressStepperBasic = ({ activeStep }) => {
  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  const boxSxStyles = {
    width: '100%',
    marginTop: '20px',
    marginLeft: '40px',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const sxStyles = {
    color: 'white',
    maxWidth: '100px',
    fontSize: '16px',
  };

  
  if (isMobile && isTablet && !isLaptop) {
    boxSxStyles.maxWidth = '834px';
    boxSxStyles.marginLeft = '70px';
  }
  if (isMobile && isTablet && isLaptop) {
    boxSxStyles.maxWidth = '800px';
    boxSxStyles.marginLeft = '0px';
    boxSxStyles.marginTop = '60px';
  }

  const laptop = isMobile && isTablet && isLaptop;

  return (
    <Box sx={boxSxStyles}>
      <Stepper
        activeStep={activeStep}
        orientation={laptop ? 'horizontal' : 'vertical'}
        alternativeLabel={laptop}
        sx={{ width: '100%' }}
      >
        <Step>
          <StepLabel>
            <Typography sx={sxStyles}>Sing up</Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Typography sx={sxStyles}>Goal</Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Typography sx={sxStyles}>Age</Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Typography sx={sxStyles}>Body parameters</Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Typography sx={sxStyles}>Activity</Typography>
          </StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};
