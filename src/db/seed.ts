import 'dotenv/config'
import { prisma } from './client.js'

async function main(): Promise<void> {
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      role: 'admin',
    },
  })
  console.warn('Seed complete')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
