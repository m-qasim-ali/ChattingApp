import { useTheme } from '@emotion/react';
import { Box, Divider, Stack, Typography, IconButton, Link } from '@mui/material';
import { DownloadSimple, Image } from 'phosphor-react';

const Timeline = ({ text }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction='row'
        alignItems={'center'}
        justifyContent={'space-between'}
        spacing={2}
      >
        <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
        <Typography variant='caption' sx={{ color: theme.palette.text }}>
          {text}
        </Typography>
        <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
      </Stack>
    </>
  );
};

const MediaType = ({ el }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={1}
        sx={{
          borderRadius: 1.5,
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          width: 'max-content',
        }}
      >
        <Stack direction='column' spacing={1}>
          <img
            src={el.img}
            style={{ maxHeight: 210, borderRadius: '10px', width: '100%' }}
            alt={el.message}
          />
          <Typography
            sx={{ color: el.incoming ? theme.palette.text : '#fff' }}
            variant='body2'
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

const TextMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction='row'
        justifyContent={el.incoming ? 'flex-start' : 'flex-end'}
      >
        <Box
          p={2}
          sx={{
            borderRadius: 1.5,
            backgroundColor: el.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: 'max-width',
          }}
        >
          <Typography
            sx={{ color: el.incoming ? theme.palette.text : '#fff' }}
            variant='body2'
          >
            {el.message}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

const DocMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction='row'
        justifyContent={el.incoming ? 'flex-start' : 'flex-end'}
      >
        <Box
          p={1}
          sx={{
            borderRadius: 1.5,
            backgroundColor: el.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: 'max-width',
          }}
        >
          <Stack spacing={1}>
            <Stack
              p={1.5}
              spacing={3}
              direction={'row'}
              alignItems={'center'}
              sx={{
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.background.paper
                    : '#F0F4FA',
                borderRadius: 1,
              }}
            >
              <Image size={36} />
              <Typography
                sx={{
                  color: theme.palette.text,
                }}
                variant='caption'
              >
                Abstract.png
              </Typography>
              <IconButton>
                <DownloadSimple size={24} />
              </IconButton>
            </Stack>

            <Typography
              sx={{ color: el.incoming ? theme.palette.text : '#fff' }}
              variant='body2'
            >
              {el.message}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const LinkMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={1}
        sx={{
          borderRadius: 1.5,
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          width: 'max-content',
        }}
      >
        <Stack direction='column' spacing={2}>
          <img
            src={el.preview}
            style={{ maxHeight: 210, borderRadius: '10px', width: '100%' }}
            alt={el.message}
          />
          <Link variant='body2' underline='hover'>visit me</Link>
          <Typography
            sx={{ color: el.incoming ? theme.palette.text : '#fff' }}
            variant='body2'
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction='row'
        justifyContent={el.incoming ? 'flex-start' : 'flex-end'}
      >
        <Box
          p={1}
          sx={{
            borderRadius: 1.5,
            backgroundColor: el.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: 'max-width',
          }}
        >
          <Stack spacing={1}>
            <Stack
              p={2}
              spacing={3}
              alignItems={'center'}
              sx={{
                backgroundColor: el.incoming
                  ? theme.palette.primary.main
                  : theme.palette.background.default,
                borderRadius: 1,
              }}
              direction={'column'}
            >
              <Typography
                sx={{
                  color: el.incoming ? '#fff' : theme.palette.text,
                }}
                variant='body2'
              >
                {el.message}
              </Typography>
            </Stack>

            <Typography
              sx={{ color: el.incoming ? theme.palette.text : '#fff' }}
              variant='body2'
            >
              {el.reply}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export { Timeline, TextMsg, MediaType, ReplyMsg, DocMsg, LinkMsg };
