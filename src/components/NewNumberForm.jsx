const NewNumberForm = ({ name, setName, number, setNumber, addName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <h2>Add New Number</h2>
      <form>
        <div>
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewNumberForm;
