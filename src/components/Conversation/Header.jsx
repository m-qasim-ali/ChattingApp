import React from 'react';
import StyledBadge from '../StyledBadge';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { faker } from '@faker-js/faker';
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from 'phosphor-react';
import { useTheme } from '@emotion/react';

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F8FAFF'
              : theme.palette.background.default,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          width: '100%',
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} spacing={2}>
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
            >
              <Avatar alt='Remy Sharp' src={faker.image.avatar()} />
            </StyledBadge>
            <Stack spacing={0.2}>
              <Typography variant='subtitle2'>
                {faker.name.firstName()}
              </Typography>
              <Typography variant='caption'>online</Typography>
            </Stack>
          </Stack>

          <Stack direction={'row'} spacing={2}>
            <IconButton>
              <VideoCamera size={24} />
            </IconButton>
            <IconButton>
              <Phone size={24} />
            </IconButton>
            <Stack direction={'row'} spacing={1}>
              <IconButton>
                <MagnifyingGlass size={24} />
              </IconButton>
              <Divider orientation='vertical' flexItem />
              <IconButton>
                <CaretDown size={24} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
