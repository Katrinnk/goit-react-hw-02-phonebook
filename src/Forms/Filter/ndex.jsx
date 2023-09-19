export const Filter = ({ filterContact }) => {
  const handleChange = ({ target: { value } }) => {
    filterContact(value);
  };
  return (
    <div className="mb-3 ms-3 me-3">
      <label htmlFor="filterContact" className="form-label">
        Find contacts by name
      </label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        className="form-control"
        id="filterContact"
      />
    </div>
  );
};
