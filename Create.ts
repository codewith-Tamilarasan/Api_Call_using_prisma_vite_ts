import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateUserInput = {
  name: string;
  age: number;
};

async function createUser(data: CreateUserInput) {
  try {
    const newUser = await prisma.user.create({
      data,
    });

    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}


const user = {
  name: 'John Doe',
  age: 30,
};

const user2 ={
  name: "tamilarasan",
  age :20
}

const user3 ={
  name :"hari",
  age :15
}

const user4 ={
  name :"haran",
  age :18
}
const user5 ={
  name :"sdkjfj",
  age :19
}

createUser(user);
createUser(user2);
createUser(user3);
createUser(user4);
createUser(user5);