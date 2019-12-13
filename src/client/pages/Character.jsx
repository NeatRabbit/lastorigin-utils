import React, {useState, useEffect} from 'react';
import {getCharacters} from '../data';

export default () => {
  const characterList = getCharacters();
  console.log(characterList);

  return (
    <div />
  );
}
