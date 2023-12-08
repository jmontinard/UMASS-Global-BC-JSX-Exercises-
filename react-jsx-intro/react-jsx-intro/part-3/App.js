

const App = () => 
   (
        <div>

           <Person name="Elizabeth" age={22} hobbies={["Reading", "Cooking", "Hiking"]} />
            <Person name="AlexanderTheGreat" age={16} hobbies={["Conquering", "Riding", "Strategy"]} />
            <Person name="John" age={20} hobbies={["Football", "Coding", "Music"]} />
        </div>
    );

    ReactDOM.render(<App />, document.getElementById("root"));