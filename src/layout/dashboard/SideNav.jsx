import NextLink from 'next/link';
// import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import { Logo } from 'src/components/logo';
import { Scrollbar } from '@/components/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
// import { items } from './config';
// import { SideNavItem } from './side-nav-item';

export const SideNav = (props) => {
  const { open, onClose } = props;
//   const pathname = usePathname();
//   const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        },
        bgcolor: "gray"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'flex',
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* <Logo /> */}
            <Image height={50} width={200} src={"/images/logo.png"}/>
          </Box>
          <Box
          component={Link}
          href={"/admin"}
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                DashBoard
              </Typography>
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <DashboardIcon />
              icon
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={1}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              // display: "flex",
              // flex
            }}
          >
            <Stack component={Link} href={"/admin/client"} sx={{display: "flex",borderRadius: "5px", p: "10px", bgcolor: "rgba(255, 255, 255, 0.07)"}}>
              Clients
            </Stack>
            <Stack component={Link} href={"/admin/partner"} sx={{display: "flex",borderRadius: "5px", p: "10px", bgcolor: "rgba(255, 255, 255, 0.07)"}}>
              Partners
            </Stack>
            
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};


