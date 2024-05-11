//useReducerをimport
import React, {useReducer} from 'react'

//counterの初期値を0に設定

import './App.css';

const initialState = 0
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action)=> {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
    switch (action){
      case 'increment':
        return countState + 1
      case 'decrement':
        return countState - 1
      case 'reset':
        return initialState
      default:
        return countState
    }
  }
  function hoge() {
    console.log(777)
  }

function App() {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
    const [count, dispatch] = useReducer(reducerFunc, initialState)
  //カウント数とそれぞれのactionを実行する<Button/>を設置する
    return (
      <>
        <h2>oi</h2>
        
        <h2>カウント：{count}</h2>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
      </>
    )
}

export default App;
