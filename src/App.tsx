import { Form } from "./components/Form";

const App = () => {
  return (
    <div className="bg-zinc-400 min-h-screen w-full flex flex-col items-center gap-6 pt-8 bg-gradient-to-br to-gray-100 from-gray-400">
      <h1 className="font-bold text-3xl">React Hook Form Com TypeScript</h1>
      <Form />
    </div>
  );
};

export default App;