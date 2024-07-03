import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {
  try {
    const data = await request.json();

    const usuarioEncontrado = await db.user.findUnique({
      where: {
        nocontrol: data.nocontrol,
      },
    });

    if (usuarioEncontrado) {
      return NextResponse.json(
        {
          mensaje: "Numero de Control ya existe",
        },
        {
          status: 400,
        }
      );
    }


    const hashedPassword = await bcrypt.hash(data.contra, 10);
    const newUser = await db.user.create({
      data: {
        nocontrol: data.nocontrol,
        contra: hashedPassword,
      },
    });

    const { contra: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
