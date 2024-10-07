import React from 'react'

export default function login() {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const inputValue = (e) => {
      const { name, value } = e.target;
  
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value // Dynamically update the correct field
      }));
  
      if (name === "email" && !emailRegex.test(value)) {
        setError("Invalid email format.");
      } else if (name === "password" && !passwordRegex.test(value)) {
        setError("Password must contain at least 8 characters, one letter, one number, and one special character.");
      } else {
        setError(""); // Clear the error when input is valid
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission from reloading the page
      if (!emailRegex.test(user.email)) {
        setError("Invalid email format.");
      } else if (!passwordRegex.test(user.password)) {
        setError("Password is not strong enough.");
      } else {
        setError("");
        console.log("Form submitted successfully", user);
      }

      if(error === "") {
        axios.post("https:localhost:3001/login", {
          body: {
            email,
            password
          }
        }).then((res) => {
          token = res.token
          // cookieshi sheinaxe
          // home pageze gadaamisamarte
        }).catch((err) => {

        })
      }

    }
  return (
    <div>
      login
      <form action="">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={inputValue}
          value={user.email}
          type="text"
          placeholder="Enter email"
        />
        <input
          name="password"
          onChange={inputValue}
          value={user.password}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
      </form>
    </div>
  )
}
