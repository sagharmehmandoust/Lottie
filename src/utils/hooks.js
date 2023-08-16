// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

let unsupported;

const useNetworkStatus = () => {
  if ('connection' in navigator && 'effectiveType' in navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  const initialNetworkStatus = !unsupported ? {
    effectiveConnectionType: navigator.connection.effectiveType
  } : {
    unsupported
  };

  const [networkStatus, setNetworkStatus] = useState(initialNetworkStatus);

  useEffect(() => {
    if (!unsupported) {
      const navigatorConnection = navigator.connection;
      const updateECTStatus = () => {
        setNetworkStatus({effectiveConnectionType: navigatorConnection.effectiveType});
      };
      navigatorConnection.addEventListener('change', updateECTStatus);
      return () => {
        navigatorConnection.removeEventListener('change', updateECTStatus);
      };
    }
  }, []);

  return { ...networkStatus, setNetworkStatus };
};

export { useNetworkStatus };
