import React, { useState , useMemo, useCallback} from 'react'
import Child from './child'

function App() {

  const [count , setCount ]= useState(0);

  console.log('parent');

  let data = useCallback ( () => {
    return  {name:'hoshim'}
  },[]);

  return (
    <div>

      app

     <Child data={data}/>
     <button onClick={()=>setCount(prev => prev+=1)}>bos naxxuy</button>
    </div>
  )
}

export default App
