const Contact = () => {
  return (
    <div>
      <h1>This Is Our Contatc Us Page</h1>
      <div>
        <input
          className="border border-black m-2 p-2 text-center"
          placeholder="Name"
        />
        <input
          className="border border-black m-2 p-2 text-center"
          placeholder="Message"
        />
        <button className="border border-black m-2 p-2 text-center bg-green-100 rounded-lg hover:cursor-pointer">
          Submit
        </button>{" "}
      </div>
    </div>
  );
};
export default Contact;
