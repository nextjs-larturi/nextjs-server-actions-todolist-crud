# Next.js Server Actions TodoList

## Technologies

- Next.js v14
- Server Actions
- Prisma / Sqlite
- Shadcn
- Bun

## Getting Started

First, run the development server:

```bash
bun install

bunx prisma init --datasource-provider sqlite

bunx prisma migrate dev --name init

bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
