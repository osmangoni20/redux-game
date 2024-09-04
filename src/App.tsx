import { decrement, increment } from "./redux/features/CounterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks"

function App() {

  const {count,boxCount}=useAppSelector(state=>state.counter)
  const dispatch=useAppDispatch()
  return (
    <>
      <div className="h-screen flex justify-center items-center">

      <div>
      <div className="p-10 bg-slate-300 rounded border-2 border-gray-400">
       <div className="flex justify-center items-center gap-2">
          <button onClick={()=>dispatch(increment())} className="px-4 py-2 bg-green-600 rounded-md m-2 text-xl text-white">Increment</button>
          <h1 className="text-2xl bg-slate-400 px-3 py-2 rounded">{count}</h1>
          <button  onClick={()=>dispatch(decrement())} className="px-4 py-2 bg-red-600 rounded-md m-2 text-xl text-white">Decrement</button>
        </div>
       </div>
      <div className="flex items-center">
      {
        boxCount.map((box:number)=>{
          return(
            <div key={box} className="p-4 m-2 w-[40px] border-2 border-gray-500 rounded">
            </div>
          )
        })
      }
      </div>
      </div>
      
      </div>
    
    </>
  )
}

export default App
