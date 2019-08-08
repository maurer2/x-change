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

const getShortDate = (dateString) => {
  const newDate = new Date(dateString);

  const day = (newDate.getDay()).toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = (newDate.getFullYear()).toString().padStart(4, '0');

  const newDateString = `${day}-${month}-${year}`;

  return newDateString;
}

const addShortDateToDocuments = (documents) => {
  const augmentedDocuments = documents.map((documentEntry) => {
    const extendedDocumentEntry = {
      name: documentEntry.name,
      date: documentEntry.date,
      dateShort: getShortDate(documentEntry.date),
    };

    return extendedDocumentEntry;
  });

  return augmentedDocuments;
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

        const augmentedDocuments = addShortDateToDocuments(responseData);
        setDocuments(augmentedDocuments);
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
