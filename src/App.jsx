import { useState, useEffect } from "react";
import personsService from "./services/persons";
import axios from "axios";
import NewNumberForm from "./components/NewNumberForm";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([,]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        personsService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
        });
    }, []);

    const addNewName = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber,
        };
        const nameFound = persons.find((person) => person.name === newName);
        if (nameFound) {
            if (
                confirm(
                    `${newName} already exists, do you want to update their number`
                )
            ) {
                personsService
                    .update(personObject, nameFound.id)
                    .then((response) => {
                        console.log(response);
                        setPersons(
                            persons.map((person) =>
                                person.id !== nameFound.id ? person : response
                            )
                        );
                        setNewName("");
                        setNewNumber("");
                    });
            }
        } else {
            personsService.add(personObject).then((response) => {
                setPersons(persons.concat(response));
                setNewName("");
                setNewNumber("");
            });
        }
    };

    const deleteUser = (id) => {
        personsService.remove(id).then(() => {
            setPersons(persons.filter((person) => person.id !== id));
        });
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filter={filter} setFilter={setFilter} />
            <NewNumberForm
                name={newName}
                setName={setNewName}
                number={newNumber}
                setNumber={setNewNumber}
                addName={addNewName}
            />
            <Numbers
                persons={persons}
                filter={filter}
                deleteUser={deleteUser}
            />
        </div>
    );
};

export default App;
