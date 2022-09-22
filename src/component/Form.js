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

      <select defaultValue="Author" className="input-Author" name="Author">
        <option value="" selected disabled>Author</option>
      </select>

      <button type="button" className="input-submit">Submit</button>
    </div>
  </form>
);

export default Form;
