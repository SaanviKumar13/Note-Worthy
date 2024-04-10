import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { signOut } from "~/utils/session.server";
export const config = { runtime: "edge" };

export const action: ActionFunction = async ({ request }) => {
  return signOut(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
