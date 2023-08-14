const ShowsNewForm = (props) => {

    function handleNewShowFormSubmit(){
        // defaults ; ids + "tv show"
    }

  return (
    <>
      <h1>Add A New Show!</h1>
      <form onSubmit={ (e) => {e.preventDefault()} }>
        <label for="title">
            Type of Show:
            <input id="title" onChange{ () => {} } />
        </label>
      </form>
    </>
  );
};

export default ShowsNewForm;
