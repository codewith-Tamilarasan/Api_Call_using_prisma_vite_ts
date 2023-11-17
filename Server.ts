const express = require('express')
import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
const cors = require('cors');
const app = express();
const port = 3000;

const prisma = new PrismaClient();

type UserData = User[];
app.use(cors());

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users: UserData = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
