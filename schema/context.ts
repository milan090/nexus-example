import { PrismaClient } from ".prisma/client";

const globals = global as any;
if (!globals.prisma) {
  globals.prisma = new PrismaClient({ log: ["query"] });
}

const prisma: PrismaClient = globals.prisma;

export interface Context {
  prisma: PrismaClient;
}

export function createContext(): Context { 
  return { prisma };
}