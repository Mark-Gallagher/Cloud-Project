import { createContext, useState, useEffect } from 'react';

const initialDataState = {
    noItems: '0'
}
const DataContext = createContext(initialDataState);

export function DataContextProvider(props) {
    const [dataObj, setDataObj] = useState(initialDataState)

    useEffect(() => {
        fetch('api/getData')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.noItems = data.noItems
                return prevDataObj
            });
        })
      }, []); 

    // see https://nextjs.org/docs/basic-features/data-fetching/client-side
    function getNoItems() {
        return dataObj.noItems
    }

    async function setNoItems(theNewNumber)  {
        const response = await fetch('api/setData', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({noItems: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.noItems= theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getNoItems: getNoItems,
        setNoItems: setNoItems
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;