
import React from 'react';


function List({ list, onArchive }) {
    //console.log("onArchive", onArchive)
    return (
        <ul>
            {list.map(item =>
                <li key={item.id}>
                    <h1>
                        {item.first_name}
                    </h1>
                    <span>
                       First Name:  {item.first_name}
                    </span>
                    <span>
                        <button
                            type="button"
                            onClick={() => onArchive(item.id)}
                        >
                            Archive
                        </button>
                    </span>
                </li>
            )}
        </ul>
    );
}
export default List