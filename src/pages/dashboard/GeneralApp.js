import React from 'react';
import Chats from './Chats';
import Conversation from '../../components/Conversation';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Chats />
      <Box sx={{
        width: "calc(100vw - 420px)",
        height: "100vh",
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default
      }}>
        <Conversation />
      </Box>
    </>
  );
};

export default GeneralApp;
