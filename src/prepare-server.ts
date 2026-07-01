import { prepareServer } from './reset-server';

prepareServer().catch(err => {
    console.error(err);
    process.exitCode = 1;
});
