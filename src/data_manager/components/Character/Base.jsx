import React from 'react';
import { css } from 'emotion';

import * as base from '../../../client/data/base'
import { colors } from '../../../client/styles/common';

export default () => {
  return (
    <div className={css`padding: 20px;`}>
      <div>
        <button type="button">추가</button>
      </div>
      {Object.keys(base.character).map((id) => (
        <div key={id} className={css`background-color: ${colors.backgroundAbove}; &+& {margin-top: 20px;}`}>
          <div>
            <span>ID :</span>
            <input type="text" defaultValue={id} />
          </div>
          <div>
            <span>Name: </span>
            <input type="text" defaultValue={base.character[id].name} />
          </div>
          <button type="button">삭제</button>
          <button type="button">추가</button>
          <table>
            <tbody>
              {Array(base.character[id].data.length).fill(0).map((_, index) => {
                const correctData = base.character[id].data[index+1];

                return (
                  <tr key={`${id}_${index+1}`}>
                    <td>{correctData.name}</td>
                    <td>{correctData.label}</td>
                    <td><button type="button">삭제</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
