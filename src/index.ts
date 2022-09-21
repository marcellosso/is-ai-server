import app from './app';
import { NODE_ENV, SERVER_PORT } from './config';
import { connectDatabase } from './database';
import { createAdminUser } from './helpers/admin';

const main = async () => {
  connectDatabase();
  await createAdminUser();
  const serverPort = app.get("port");
  
  app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
    console.log(`Environment: ${NODE_ENV}`);
  });
}

main();