import { ListView } from "./ListView";
import { Employee } from "./types";

function App() {
  const users: Employee[] = [
    { id: 1, name: "Peter", department: "IT" },
    { id: 2, name: "Jesus", department: "Shitfuckery" },
  ];

  return (
    <div>
      <ListView items={users} onClick={((employee) => console.log(employee))}/>
    </div>
  );
}

export default App;
