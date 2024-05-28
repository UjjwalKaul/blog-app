import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@ujjawalkaul/medium-common';
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use('/*', async (c, next) => {
  const authHeader = c.req.header('authorization') || '';
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set('userId', String(user.id));
      await next();
    } else {
      c.status(401);
      return c.json({ message: 'Unauthorized' });
    }
  } catch (error) {
    c.status(401);
    return c.json({ message: 'Unauthorized' });
  }
});

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany();
  // Todo: Pagination
  return c.json(blogs);
});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });
    return c.json({
      blog: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({ message: 'Failed to get blog with ID' });
  }
});

blogRouter.post('/', async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: 'Inputs not correct',
    });
  }

  const userId = c.get('userId'); // Get userId from context
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(userId),
    },
  });

  return c.json({ id: blog.id });
});

blogRouter.put('/', async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: 'Inputs not correct' });
  }
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({ id: blog.id });
});
