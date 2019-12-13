import axios from 'axios';

import base from './base';
import list from './list';

import characterList from  './character/*.json';

// const getCharacter = (id) => import(characterList[`${id}.json`]);

/**
 * Download character data
//  * @param {function} progressCallback - calling function per finish data
 * @returns {array} axios array
 */
export const getCharacters = () => characterList;

export const getBaseData = () => base;
