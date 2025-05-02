import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [users, setUsers] = useState([]); // Step 1: Create state to store users
  const [loading, setLoading] = useState(true); // Step 2: Create loading state

  useEffect(() => {
    // Step 3: Fetch data when the component loads
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Step 4: Convert response to JSON
      .then((data) => {
        setUsers(data); // Step 5: Save data to state
        setLoading(false); // Step 6: Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Step 7: Stop loading on error
      });
  }, []); // Empty dependency array means: run only once on page load

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
