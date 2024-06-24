import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { src } from '../../constants/urls';
import { useLoading } from '../../contexts/LoadingContext';

const Loading = () => {

  

  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 9999,
      }}
    >
      <img src={src} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
    </Box>
  );
};

export default Loading;