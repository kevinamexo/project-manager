import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();
    return NextResponse.json({
      data: allUsers,
      status: 200,
    });
  } catch (error) {
    console.log("Error fetching users");
    return NextResponse.json({
      message: "Error fetching users",
      status: 400,
    });
  }
}
