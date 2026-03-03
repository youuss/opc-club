import { NextResponse } from "next/server";
import { getMembers, getMembersByCategory } from "@/lib/members";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? "all";

  const members = await getMembersByCategory(category);
  return NextResponse.json(members);
}
