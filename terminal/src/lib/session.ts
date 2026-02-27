import { cookies } from "next/headers";

export type SessionUser = {
  name: string;
  displayName?: string;
  email?: string;
  avatar?: string;
  owner?: string;
};

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("casdoor_session")?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}
