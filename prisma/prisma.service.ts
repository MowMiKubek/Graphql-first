import { INestApplication, Injectable, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
    constructor() {
        super();
        this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
            await this.$disconnect();
        });
    }
}
