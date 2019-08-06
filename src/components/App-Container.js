import React, { useState, useEffect } from 'react';
import App from './App';

const fetchData = (url) => {
  const data = fetch(url)
    .then((response) => {
      if (response.ok) {
        let jsonResponse;

        try {
          jsonResponse = response.json();
        } catch (e) {
          return new Error(e);
        }

        return jsonResponse;
      }

      return new Error();
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

const getDocuments = () => {
  const documentsRaw = fetchData('/data.json')
    .then((responseData) => {
      if (responseData === undefined) {
        return [];
      }

      const { documents } = responseData;

      return documents;
    });

  return documentsRaw;
};

const getUser = () => {
  const documentsRaw = fetchData('/user.json')
    .then((responseData) => {
      if (responseData === undefined) {
        return undefined;
      }

      return responseData.body.User.profile;
    });

  return documentsRaw;
};

function AppContainer() {
  const [documents, setDocuments] = useState([]);
  const [user, setUser] = useState({});
  // const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getDocuments()
      .then((responseData) => {
        if (responseData.length === 0) {
          return;
        }
        setDocuments(responseData);
      });
  }, []);

  useEffect(() => {
    getUser()
      .then((responseData) => {
        if (responseData === undefined) {
          return;
        }

        setUser(responseData);
      });
  }, []);

  return (
    <App user={user} documents={documents} />
  );
}

export default AppContainer;
