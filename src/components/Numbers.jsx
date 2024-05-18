import Person from "./Person";

const Numbers = ({ persons, filter, deleteUser }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => {
                    if (filter === "")
                        return (
                            <>
                                <Person key={person.id} person={person} />
                                <button onClick={() => deleteUser(person.id)}>
                                    delete
                                </button>
                            </>
                        );
                    else if (
                        person.name.toLowerCase().includes(filter.toLowerCase())
                    ) {
                        return (
                            <>
                                <Person key={person.id} person={person} />
                                <button onClick={() => deleteUser(person.id)}>
                                    delete
                                </button>
                            </>
                        );
                    }
                })}
            </ul>
        </>
    );
};

export default Numbers;
