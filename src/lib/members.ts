import { members as mockData, type Member } from "@/app/data/members";

export type { Member };

export async function getMembers(): Promise<Member[]> {
  return mockData;
}

export async function getMemberById(id: string): Promise<Member | undefined> {
  return mockData.find((m) => m.id === id);
}

export async function getMembersByCategory(category: string): Promise<Member[]> {
  if (!category || category === "all") return mockData;
  return mockData.filter((m) => m.category === category);
}
