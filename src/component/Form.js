const Form = () => (

  <form className="form-container">
    <p>ADD NEW BOOK</p>
    <div className="form-wrap d-flex">
      <input
        className="input-title"
        type="text"
        placeholder="Book title"
        name="title"
      />
      <input
        className="input-Author"
        type="text"
        placeholder="Author"
        name="title"
      />

      <button type="button" className="input-submit">Submit</button>
    </div>
  </form>
);

export default Form;
