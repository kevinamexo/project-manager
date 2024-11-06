import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  const user = session?.user?.name;
  return (
    <div className="">
      {user ? (
        <>
          <h1>{user}</h1>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      )}
    </div>
  );
}
