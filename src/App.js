import React from "react";
import "./index.css";

function CharacterDropDown() {
  const [posts, setPosts] = React.useState([]);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      
        setPosts(
          data.map(({ title }) => ({ label: title, value: title }))
        );
        
      
    }
    getCharacters();
    return () => {
      
    };
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {posts.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  //   <div>
  //    <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
  // <p>You have selected <strong>{this.state.title}</strong> whose body is <strong>{this.state.body}</strong></p>
  //   </div >
  );
}

export default function App() {
  return (
    <div className="App">
      <CharacterDropDown />
    </div>
  );
}
