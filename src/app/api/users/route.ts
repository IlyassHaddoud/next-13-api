import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database";

export const GET = async () => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

export const POST = async (req: NextRequest) => {
  const { name, email } = await req.json();
  await prisma.user.create({ data: { name, email } });
  return NextResponse.json("User Added Succefully", { status: 200 });
};

export const PUT = async (req: NextRequest) => {
  const { id, name } = await req.json();
  await prisma.user.update({ where: { id }, data: { name } });
  return NextResponse.json("User Updated Succefully", { status: 201 });
};

export const DELETE = async (req: NextRequest) => {
  const { id } = await req.json();
  await prisma.user.delete({ where: { id } });
  return NextResponse.json("User Deleted Succefully", { status: 202 });
};
