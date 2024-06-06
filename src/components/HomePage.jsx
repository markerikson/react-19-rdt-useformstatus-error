import { Link } from "react-router-dom";

import { makeRelativePath } from "../urls";

const HomePage = () => {
  return (
    <>
      <div className="text-center text-xl">
        This is a playground for React 19 and React experimental features. This is for learning
        purposes only.
      </div>

      <div className="my-5 text-xl">
        <h2 className="my-5">Examples</h2>
        <ul>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">use() Hook Example 1</h3>
              <p className="my-2">
                Use the `use()` hook to fetch a random joke from the Chuck Norris API
              </p>
              <Link className="font-bold text-blue-800" to={makeRelativePath("use-example-1")}>
                View use() Example 1
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">use() Hook Example 2</h3>
              <p className="my-2">
                Use the `use()` hook to fetch some posts from the JSONPlaceholder API
              </p>
              <Link className="font-bold text-blue-800" to={makeRelativePath("use-example-2")}>
                View use() Example 2
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">use() Hook Example 3</h3>
              <p className="my-2">
                Use the `use()` hook to resolve a message from a promise and show it
              </p>
              <Link className="font-bold text-blue-800" to={makeRelativePath("use-example-3")}>
                View use() Example 3
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">use(context) Example</h3>
              <p className="my-2">Use the `use()` hook to apply aa theme context</p>
              <Link
                className="font-bold text-blue-800"
                to={makeRelativePath("use-example-context")}
              >
                View use(context) Example
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">Action Example 1</h3>
              <p className="my-2">Use an action to submit a post form</p>
              <Link className="font-bold text-blue-800" to={makeRelativePath("action-example-1")}>
                View Action Example 1
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">Action Example 2</h3>
              <p className="my-2">Use an action to add product to cart via form</p>
              <Link className="font-bold text-blue-800" to={makeRelativePath("action-example-2")}>
                View Action Example 2
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">useFormStatus Example</h3>
              <p className="my-2">
                Use the useFormStatus hook to get status of post form submission
              </p>
              <Link
                className="font-bold text-blue-800"
                to={makeRelativePath("useformstatus-example")}
              >
                View useFormStatus Example
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">useFormState Example</h3>
              <p className="my-2">
                Use the useFormState Hook to show specific messages for cart items
              </p>
              <Link
                className="font-bold text-blue-800"
                to={makeRelativePath("useformstate-example")}
              >
                View useFormState Example
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">useOptimistic Example</h3>
              <p className="my-2">
                Use the useOptimistic hook to show a message before the server responds
              </p>
              <Link
                className="font-bold text-blue-800"
                to={makeRelativePath("useoptimistic-example")}
              >
                View useOptimistic Example
              </Link>
            </div>
          </li>
          <li className="my-5 rounded bg-blue-50 p-4 shadow">
            <div>
              <h3 className="text-2xl font-bold">useTransition Example</h3>
              <p className="my-2">
                Use the useTransition hook to show a message before the server responds
              </p>
              <Link
                className="font-bold text-blue-800"
                to={makeRelativePath("usetransition-example")}
              >
                View useTransition Example
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HomePage;
