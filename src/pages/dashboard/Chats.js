import React from 'react'
import { Box, Stack, Typography, IconButton, InputBase, Divider, Button, Avatar, Badge } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import { ChatList } from '../../data/index';
import { SimpleBarStyle } from "../../components/Scrollbar"

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderRadius: 28,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%'
  }
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ data }) => {
  const theme = useTheme();
  return (
    <Box key={data.id} sx={{
      width: "100%",
      borderRadius: 1.5,
      backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper
    }}
      p={2}
    >
      <Stack direction="row" alignItems={"center"} spacing={1} justifyContent={"space-between"}>

        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {
            data.online ? (<StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={data.img} />
            </StyledBadge>) : (<Avatar alt="Remy Sharp" src={data.img} />)
          }
          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>{data.name}</Typography>
            <Typography variant='caption'>{data.msg}</Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} spacing={2} justifyContent={"space-between"}>
          <Typography sx={{ fontWeight: 600 }} variant='caption'>{data.time}</Typography>
          <Badge color='primary' badgeContent={data.unread} />
        </Stack>
      </Stack>
    </Box >
  )
}

const Chats = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ height: "100vh", width: 320, position: "relative", backgroundColor: theme.palette.mode === "light" ? "#F8FAFA" : theme.palette.background.default, boxShadow: "0 0 2px rgba(0,0,2,0.25)" }}>
        <Stack sx={{ height: "100%" }} direction="column" p={3} spacing={2}>
          <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}>
            <Typography variant='h5'>Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>

          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>

          <Stack spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={28} />
              <Button>Archieved</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack direction={"column"} spacing={2} className='scrollbar' sx={{ height: "100%", overflowY: "scroll", flexGrow: 1 }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false} >
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {
                  ChatList.filter(el => el.pinned).map(el => {
                    return <ChatElement key={el.id} data={el} />
                  })
                }
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {
                  ChatList.filter(el => !el.pinned).map(el => {
                    return <ChatElement key={el.id} data={el} />
                  })
                }
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </ >
  )
}

export default Chats
