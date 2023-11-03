import React from 'react'
import { ListItem } from './ListItem'

export const List = ( {groceryList}) => {
  return (
    <div className="list">
        <ul>
            {groceryList.map((item, index) => (
                <ListItem 
                text={item}
                key={index}
                />
            )
            )}
        </ul>
    </div>
  )
}
