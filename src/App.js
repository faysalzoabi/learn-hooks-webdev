import React, {useState, useMemo, useEffect, useRef} from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(4)
  // const [count, setCount] = useState(() => {
  //   //run only once at initial render
  //   console.log("hello there");
  //   return 4;
  // })

  // const [state, setState] = useState({count:4, theme:'blue'})
  // const count = state.count;
  // const theme = state.theme

  //or use different 2 hooks
  // const [count, setCount] = useState(4);
  // const [theme, setTheme] = useState('blue');

  //use function version of setting your state
  // function decrementCount(){
  //   setCount(prevcount => prevcount - 1)
  //   setTheme('red')
    // setCount(prevcount => prevcount - 1)

    //when you update the object you update it with old values cuz
    //the dont get merged directly
    // setState(prevState => {
    //   return {...prevState, count: prevState.count - 1}
    // })
  // }

  // function incrementCount(){
  //   // setCount(prevcount => prevcount + 1)
  // }

  //using effect
  // const[resourceType, setResourceType] = useState('posts')
  // const[items, setItems] = useState([])

  // useEffect(()=> {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   .then(response => response.json())
  //   .then(json => setItems(json))
  // }, [resourceType])
  // const [number, setNumber] = useState(0)
  // const [dark, setDark] = useState(false)
  //we use usememo to avoid calling the slwo function agian once the
  //componenet is renderd now the function would be executed only when number is changed
  //we wrap the slow function with usememo so doesnt recompute every single time
  //you render your component

  // next use for referntial equality make sure the reference of object or array is exactly the same
  //last time when you rendered if none of the internal elements changed
  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number)
  // }, [number])

  //we use memo to reference the exat same object. once the compoonenet
  // is re rendered it will create a new object and the useffect will excute as
  // we got new themestyles
//   const themeStyles = useMemo(() =>{
//     return {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }
// }, [dark])

  // useEffect(() => {
  //   console.log('Theme changes');
  // }, [themeStyles])

  // const [name, setName] = useState('')
  //ref very similar to state doesnt cause you to rerender like useState
  //ref can be use to access dom elements but can be use it for persisting values across renders
  //without causing rerenders
  // const renderCount = useRef(0);
  // const inputRef = useRef()

  // useEffect(()=> {
  //   renderCount.current = renderCount.current + 1
  // })

  // function focus(){
  //   console.log(inputRef.current.focus());
  // }


  const [name, setName] = useState('')
  //ref doesnt cause your component to update when its changed
  //whenever our input get rendered on screen the inputref var would be equal to input dom element
  const inputRef = useRef()

  const renderCount = useRef(0);

  // also used to store the previous value
  const prevName = useRef('')

  useEffect(() => {
    //its changing but it doesnt let our component rerender

    renderCount.current = renderCount.current + 1
  })

  //use ref to presist value between rerenders
  useEffect(() => {
    prevName.current = name
  }, [name])


  function focus() {
    inputRef.current.focus()
  }


  return (
    <div className="App">
      {/* <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button> */}
    {/* <button onClick={() => setResourceType('posts')}>Posts</button>
    <button onClick={() => setResourceType('users')}>users</button>
    <button onClick={() => setResourceType('comments')}>comments</button> */}
    {/* <h1>{resourceType}</h1>
    <div> */}
      {/* {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
      {/* <input type="number" value={number } onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
    <div style={themeStyles}>{doubleNumber}</div> */}
    {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
    {/* <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <div>I rendered {renderCount.current} times</div>
    <button onClick={focus}>Focus</button> */}
    {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <button onClick={focus}>Focus</button>
    <div>I rendered {renderCount.current}</div>
  <div>my name is {name} and its used to be {prevName.current}</div>
    </div>
  );
}

// function slowFunction(num) {
//   console.log('calling slow function');
//   for(let i=0; i <= 1000000000; i++) {}
//   return num * 2;
// }

export default App;
