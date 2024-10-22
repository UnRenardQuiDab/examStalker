import React, { createContext, useState, useContext } from 'react';
import config from '../config';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [expiration, setExpiration] = useState(0);

  const getToken = async () => {
    if (token && Date.now() < expiration) return;
    console.log(process.env.API42_UID)
    console.log(process.env.API42_SECRET)

    await fetch(`${config.url}/oauth/token`, tokenOptions)
      .then(async (response) => {
        if (response.ok) return response.json();
        if (process.env.API42_DEV) console.error(await response.json(),);
        throw new Error("Failed to generate 42Api token");
      })
      .then((responseJson) => {
        this.#token = responseJson.access_token;
        this.#expiration = responseJson.expires_in * 1000 + Date.now();
        this.#secretValidUntil = responseJson.secret_valid_until;
        console.warn("42API token generated.");
      });
  }

  return (
    <ApiContext.Provider value={{ token }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};