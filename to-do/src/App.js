import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Todo from "./Todo";
import task from "./Task";

function App() {
  return (
    <div>
      <Header />
      <div className="liv">
        {task.map((noteItem) => (
          <Todo
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
