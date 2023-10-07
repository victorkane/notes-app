"use client"

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from "react"
import { RedirectType, useRouter } from "next/navigation"
import { redirect } from "next/navigation"

export default function CreateNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const router = useRouter()

  const create = async (e: React.FormEvent) => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    e.preventDefault()
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })

    setContent("")
    setTitle("")

    // this give uncaught in promise error
    // redirect("/notes", RedirectType)

    // works but is not client side, so no refresh
    // router.push("/notes")

    // works!!! proof of the truth of rtfm
    router.refresh()
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  )
}
