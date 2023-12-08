// import FirstComponent from "./FirstComponent"

const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="Jeffe" />
    </div>
  )
  
  
  
  ReactDOM.render(<App />, document.getElementById("root"))
  