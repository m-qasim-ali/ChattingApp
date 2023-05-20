import React from 'react';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import {
  Link,
  Smiley,
  TelegramLogo,
} from 'phosphor-react';
import { useTheme } from '@emotion/react';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingTop: '12px!important',
    paddingBottom: '12px!important',
  },
}));

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={2}
        sx={{
          width: '100%',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F7F9FD'
              : theme.palette.background.default,
        }}
      >
        <Stack
          direction='row'
          spacing={3}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <StyledInput
            sx={{
              backgroundColor: '#EAF2F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            fullWidth
            variant='filled'
            placeholder='write a message...'
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Stack sx={{ position: 'relative' }}>
                  <InputAdornment position='start'>
                    <IconButton>
                      <Link />
                    </IconButton>
                  </InputAdornment>
                </Stack>
              ),
              endAdornment: (
                <Stack sx={{ position: 'relative' }}>
                  <InputAdornment position='end'>
                    <IconButton>
                      <Smiley />
                    </IconButton>
                  </InputAdornment>
                </Stack>
              ),
            }}
          />
          <IconButton
            aria-label='send'
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
              color: '#fff',
              height: '48px',
              width: '48px',
            }}
          >
            <TelegramLogo size={24} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
