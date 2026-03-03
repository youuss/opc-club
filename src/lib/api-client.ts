import type { Member } from "./members";

export async function fetchMembers(): Promise<Member[]> {
  const res = await fetch("/api/members");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export async function fetchMemberById(id: string): Promise<Member | null> {
  const res = await fetch(`/api/members/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch member");
  return res.json();
}
