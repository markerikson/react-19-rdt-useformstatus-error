import { Suspense, use } from "react";

const fetchData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchData());
  return (
    <div className="my-6 rounded-lg bg-blue-50 p-4 shadow-md">
      <h2 className="text-xl font-bold">Joke: {joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense fallback={<h2 className="mt-5 text-center text-2xl font-bold">Loading...</h2>}>
      <title>Chuck Norris Jokes</title>
      <meta name="description" content="Chuck Norris jokes" />
      <meta name="keywords" content="chuck norris, jokes" />

      <JokeItem />
    </Suspense>
  );
};
export { Joke as UseExample1 };
