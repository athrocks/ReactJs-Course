import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I have seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default App;
