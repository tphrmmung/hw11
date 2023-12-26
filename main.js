
const root = ReactDOM.createRoot(document.querySelector('#root'))


// const content = (
//     <div>
//     <h1>Today : {new Date().toDateString}</h1>
// </div>
// )


function Counter() {

    return (
        
    <>
  <h1 className="Title"> Today:{(new Date()).toDateString()}</h1>
  <h2 align ="center">Sum = 0</h2>
    <button  class="btn-add">Add Counter</button>
    
            <div className = "counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>C</button>
            <button>X</button>
            </div>
     </>
    )
}

function App() {
    return (
        <div>
        {/* <h1>Today : {new Date().toDateString()}</h1> */}
        <Counter />
        </div>
    );
}


root.render(<App />)
