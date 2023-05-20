import { Stack } from '@mui/material';
import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {

  return (
    <>
      <Stack direction={'column'} sx={{ width: '100%', height: '100vh' }}>
        {/* Header */}
        <Header />
        {/* Msg box */}
        <Message />

        {/* Footer Box */}
        <Footer />
      </Stack>
    </>
  );
};

export default Conversation;
