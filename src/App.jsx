import {
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryGetQuotes,
} from './services/promise-me';
export default function App() {
  const handleClick = async (cb) => {
    const result = await cb();
    console.log(result);
  };

  return (
    <>
      <button onClick={() => handleClick(asyncGetQuotes)}>
        Async Get Quotes
      </button>
      <button onClick={() => handleClick(thenGetQuotes)}>
        Then get Quotes
      </button>
      <button onClick={() => handleClick(asyncTryGetQuotes)}>
        Try get Quotes
      </button>
      <button onClick={() => handleClick(thenGetQuotes)}>
        Then get Quotes
      </button>
    </>
  );
}
