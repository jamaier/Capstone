import { NextApiRequest, NextApiResponse } from "next";

import { getPaginationOptions } from "@/libs/pagination";

import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }

  try {

    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);
      const { body } = req.body;
      // this is specifically for the post body in the schema not the request body
      // different from the request body ie. const { body } = req;

      const post = await prisma.post.create({
        data: {
          body,
          userId: currentUser.id
        }
      });

      return res.status(200).json(post);
    }

    if (req.method === 'GET') {
      const { userId, page = 1 } = req.query;
      const itemsPerPage = 10;
      const { skip, take } = getPaginationOptions(Number(page), itemsPerPage);

      let posts;

      if (userId && typeof userId === 'string') {
        posts = await prisma.post.findMany({
          where: {
            userId
          },
          include: {
            user: true,
            comments: true
          },
          orderBy: {
            createdAt: 'desc'
          },
          skip,
          take
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            comments: true
          },
          orderBy: {
            createdAt: 'desc'
          },
          skip,
          take
        });
      }

      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}