import { app } from './app';
import { db as databaseConnection } from './database/db';

try {
  databaseConnection();
  app.listen(3000, () => console.log('🔥 Server started on 3000'));
} catch (error) {
  console.error(error);
}
