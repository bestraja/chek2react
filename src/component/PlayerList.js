import React from 'react'
import data from '../players';

import Player from './Player';

function PlayerList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((el,index)=> <Player obje={el} key={index}/>)}
    </div>
  )
}

export default PlayerList