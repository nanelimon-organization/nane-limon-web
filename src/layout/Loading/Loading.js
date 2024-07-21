import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { src } from '../../constants/urls';
import { useLoading } from '../../contexts/LoadingContext';
import loadingAnimation from '../../assets/loading.json';
import Lottie from 'lottie-react';

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
      <Lottie
        animationData={loadingAnimation}
        style={{ width: 100, height: 100 }}
      />
    </Box>
  );
};

export default Loading;