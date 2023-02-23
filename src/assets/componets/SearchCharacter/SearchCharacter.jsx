

const SearchCharacter = ({ dataSearch }) => {
  const submit = (e) => {
    if (e.key) {
      dataSearch(e.target.value);
    }
  };
  return (
    <>
    <div>
      <input
        className="rounded-lg max-sm:px-6  px-16 my-8 py-2 bg-neutral-50"
        type="text"
        onKeyUp={submit}
        placeholder="Busca a tu personaje..."
      />
    </div>
    </>
  );
};

export default SearchCharacter;
