import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { db } from "~/db.server";

export const loader = async () => {
  const todos = await db.todo.findMany();
  return json({ todos });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  await db.todo.create({ data: { title } });
  return null;
};

export default function Index() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>TODO List</h1>
      <Form method="post">
        <input type="text" name="title" required />
        <button type="submit">Add Todo</button>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
