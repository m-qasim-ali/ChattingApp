import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Stack, Divider, Avatar } from '@mui/material';
import { Nav_Buttons } from '../../data';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import Logo from '../../assets/Images/logo.ico';
import { useState } from 'react';
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();

  return (
    <>
      <Box
        p={2}
        sx={{
          width: 100,
          height: '100vh',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        }}
      >
        <Stack
          sx={{ height: '100%' }}
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          spacing={3}
        >
          <Stack
            direction='column'
            alignItems='center'
            width='100%'
            spacing={4}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt='Chatting App logo' />
            </Box>
            <Stack
              sx={{ width: 'max-content' }}
              spacing={3}
              directionf='column'
              alignItems='center'
            >
              {Nav_Buttons.map((el) => {
                return selected === el.index ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    p={1}
                    key={el.index}
                  >
                    <IconButton
                      sx={{ color: '#fff', width: 'max-content' }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(el.index)}
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}
              <Divider sx={{ width: '48px' }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack direction='column' alignItems='center' spacing={4}>
            <AntSwitch onChange={() => onToggleMode()} defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
