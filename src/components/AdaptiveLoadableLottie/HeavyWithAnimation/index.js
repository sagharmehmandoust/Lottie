import React from 'react';
import Lottie from 'react-lottie';
import Layout from '../Layout';
import loadingLottie from '../../../assets/lotties/loading.json';

const HeavyWithAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Layout>
      <Lottie options={defaultOptions} />
    </Layout>
  );
};

export default HeavyWithAnimation;
