

const Person = ({ name, age, hobbies }) => {
    const shortName = name.length > 8 ? name.substring(0, 6) : name;

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {shortName}</p>
            <p>Age: {age}</p>
            {age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
            <h4>Hobbies:</h4>
            <ul>
                {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>
        </div>
    );
}
