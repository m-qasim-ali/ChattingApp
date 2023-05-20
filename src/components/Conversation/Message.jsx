import { Box, Stack } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';
import { Chat_History } from '../../data';
import {
  Timeline,
  TextMsg,
  MediaType,
  ReplyMsg,
  DocMsg,
  LinkMsg,
} from './MessageTypes';

const Message = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={3}
        flexGrow={1}
        sx={{
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.paper,
          width: '100%',
          overflow: 'scroll',
        }}
        className='scrollbar'
      >
        <Stack direction='column' spacing={2}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case 'divider':
                return <Timeline key={new Date()} text={el.text} />;
              case 'msg':
                switch (el.subtype) {
                  case 'img':
                    return <MediaType el={el} />;
                  case 'doc':
                    return <DocMsg el={el} />;
                  case 'link':
                    return <LinkMsg el={el} />;
                  case 'reply':
                    return <ReplyMsg el={el} />;
                  default:
                    return <TextMsg el={el} />;
                }
                break;
              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Message;
