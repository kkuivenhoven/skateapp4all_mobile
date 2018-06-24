// must provide libraryId and that will be the payload

export const selectLibrary = (libraryId) => {
  return { 
    type: 'select_library',
    payload: libraryId
  };  
};
