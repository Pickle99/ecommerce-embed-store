import { PrismaClient } from '@prisma/client'
import chalk from 'chalk'

const prisma = new PrismaClient()

async function main(): Promise<void> {
  const existing = await prisma.settings.findFirst()

  if (existing) {
    console.log('Settings already exist. Skipping...')
    return
  }

  await prisma.settings.create({
    data: {
      recently_updated_products_visibility: true,
      recently_updated_products_visibility_count: 3,
    },
  })

  console.log(chalk.green.bold('Settings created successfully.'))
}

main()
  .catch((err) => {
    console.error(chalk.red.bold('Error seeding settings:'), err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
