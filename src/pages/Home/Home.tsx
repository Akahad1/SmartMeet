const Home = () => {
  const onsubit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const userName = (form.name as HTMLInputElement).value;
    console.log(userName);
  };

  return (
    <div>
      <form onSubmit={onsubit}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;
