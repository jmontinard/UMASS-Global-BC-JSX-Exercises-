const App = () => (
  <div>
    <Tweet name="jeffe" username="Jeffe-Holmes" date={new Date()} msg="I'm too great for this platform"/>
    <Tweet name="Alice" username="Alice_Wonder" date={new Date()} msg="Just discovered a new planet!"/>

    <Tweet name="Bob" username="BobTheExplorer" date={new Date()} msg="Climbed the highest mountain today!"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));