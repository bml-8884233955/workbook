import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useAxios from "./useAxios";

function FetchingData() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(res => res.json())
            .then(setData);
    }, []);


    const { resdata, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );


    // const { data, loading } = useAxios("https://jsonplaceholder.typicode.com/posts");

    return (
        <>
            <h3> Fetching Data</h3>
            <p> React itself doses not fetch data</p>
            <p>Browser API's or Libraries(axios) inside lifecycle (useEffect)</p>

            <h4>Flow</h4>
            <ul>
                <li> Component mounts</li>
                <li>API call is triggered</li>
                <li>Data comes - stored in state</li>
                <li>UI re-renders</li>
            </ul>
            <pre><code>
                {` useEffect(()=>{
        fetchData();
        }, [])`}

            </code></pre>

            <p>
                We use useEffect for API Calls , as React components render multiple times.
                It will run on every render - Infinite calls
            </p>

            <h2> Products</h2>
            {data && data.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}

            <h2> Custom Hook Data</h2>
            {resdata && resdata.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}

            {/* {Here’s a **clear, in-depth comparison of REST vs GraphQL**—exactly how you’d explain it in an interview or use it in real projects.

---

# 🔥 1. Core Idea

### 🌐 REST (Representational State Transfer)

* Uses **multiple endpoints**
* Each endpoint returns **fixed data**

👉 Example:

```
GET /users
GET /users/1
GET /users/1/posts
```

---

### ⚡ GraphQL

* Uses **single endpoint**
* Client decides **what data it needs**

👉 Example:

```graphql
query {
  user(id: 1) {
    name
    posts {
      title
    }
  }
}
```

---

# 🔥 2. Key Difference (MOST IMPORTANT)

👉 **REST = Server decides data**
👉 **GraphQL = Client decides data**

---

# 🔥 3. Real Problem (Why GraphQL Exists)

### ❌ REST Issue: Over-fetching

```http
GET /users/1
```

Response:

```json
{
  "id": 1,
  "name": "John",
  "email": "john@email.com",
  "address": "..."
}
```

👉 You only needed **name**, but got everything

---

### ❌ REST Issue: Under-fetching

```http
GET /users/1
GET /users/1/posts
```

👉 Multiple API calls needed

---

### ✅ GraphQL Fix

```graphql
query {
  user(id: 1) {
    name
    posts {
      title
    }
  }
}
```

👉 One request → exact data

---

# ⚔️ 4. Side-by-Side Comparison

| Feature        | REST        | GraphQL               |
| -------------- | ----------- | --------------------- |
| Endpoints      | Multiple    | Single                |
| Data control   | Server      | Client                |
| Over-fetching  | ❌ Yes       | ✅ No                  |
| Under-fetching | ❌ Yes       | ✅ No                  |
| Performance    | Medium      | High (optimized data) |
| Learning curve | Easy        | Moderate              |
| Caching        | Easy (HTTP) | Complex               |
| Error handling | Simple      | Structured            |

---

# 🔥 5. Code Example (React)

## REST (Fetch)

```js
useEffect(() => {
  fetch("/api/users/1")
    .then(res => res.json())
    .then(setUser);
}, []);
```

---

## GraphQL (Query)

```js
import { useEffect, useState } from "react";

function GraphQLExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            user(id: 1) {
              name
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  return <h3>{data?.user.name}</h3>;
}
```

---

# 🧠 6. When to Use What

## ✅ Use REST when:

* Simple applications
* CRUD operations
* Small team / quick setup
* Public APIs

---

## ✅ Use GraphQL when:

* Complex UI (multiple data sources)
* Mobile apps (optimize bandwidth)
* Large-scale apps
* Need flexible queries

---

# 🔥 7. Real-World Usage

* REST → Most companies (simple & stable)
* GraphQL → Modern apps (like Facebook, Shopify)

---

# 🎯 8. Interview Answer (Perfect)

If asked:

> “REST vs GraphQL?”

Say:

> “REST uses multiple endpoints and returns fixed data, which can lead to over-fetching or multiple requests. GraphQL uses a single endpoint where the client specifies exactly what data it needs, improving efficiency. However, REST is simpler and easier to cache, while GraphQL is more flexible but slightly complex.”

---

# ⚠️ 9. Drawbacks of GraphQL (Important!)

* Complex setup
* Harder caching
* Query complexity can affect performance

---

# 🚀 Final Summary

* REST → Simple, widely used
* GraphQL → Flexible, efficient, modern

---

If you want next:
👉 I can show **REST → GraphQL migration example**
👉 Or **React Query + GraphQL (advanced interview level)**
} */}



        </>
    )
}

export default FetchingData;