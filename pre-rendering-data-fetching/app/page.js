import path from "path";
import fs from "fs/promises";

async function getDummyData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

async function getStaticSideProps() {
  console.log("(Re-)Generating...");
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 10 } }
  );

  return usersResponse.json();
}

export default async function Home() {
  const { products } = await getDummyData();
  const users = await getStaticSideProps();
  return (
    <div>
      <h1>user list</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>유저 이름 : {user.name}</li>
        </ul>
      ))}
      <h1>product list</h1>
      {products.map((product) => (
        <ul key={product.id}>
          <li>상품 제목 : {product.title}</li>
        </ul>
      ))}
    </div>
  );
}
