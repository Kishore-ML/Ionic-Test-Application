import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';

const AppUrlListener: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    const listener = App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      // const slug = event.url.split('.com').pop();
      if (event.url) {
        history.push("/project");
      }
    });
    return () => {
      listener.remove();
    };
  }, [history]);
  return null;
};

export default AppUrlListener;