import prisma from '@/libs/prismadb'
import { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, password } = body

    if (!email || !name || !password) {
      return new NextResponse('Missing info', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('Sign Up Error:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return new NextResponse('The account with this mail already exists!', {
          status: 409,
        })
      }
      return new NextResponse('Something went wrong!')
    } else {
      throw error
    }
  }
}
