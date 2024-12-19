import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ExamsProvider } from './context/useExams';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ExamsProvider>
        <App />
      </ExamsProvider>
    </ChakraProvider>
  </React.StrictMode>
);


