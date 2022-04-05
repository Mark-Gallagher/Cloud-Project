import React from 'react'
import { useContext } from 'react';
import DataContext from '../store/data-store.js'
import { Button } from '@nextui-org/react';
function Items() 
{
  const dataCtx = useContext(DataContext)
  let noItems = dataCtx.getNoItems()

  function incrementItems(){
    NoItems = dataCtx.getNoItems()
    NoItems = parseInt(NoItems) + 1
    dataCtx.setNoItems('' + NoItems)
  }
  function decrementItems(){
    NoItems = dataCtx.getNoItems()
    NoItems = parseInt(NoItems) - 1
    dataCtx.setNoItems('' + NoItems)
  }

  return (
    <section>
      <h1>There are {NoItems} Items</h1>
      <Button  flat color="success" auto onClick={() => incrementItems()}>Increment Items</Button>
      <h1 />
      <Button  flat color="error" auto onClick={() =>decrementItems()}>Decrement Items</Button>
    </section>
  );
}
  
  export default Items;