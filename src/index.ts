import 'dotenv/config';
import express, { Request, Response } from 'express';
import './shared/firebase';
import ListenerFirestore from 'shared/firebase/listenerFirestore';

const PORT = 6944;
const app = express();
app.use(express.json());

const uuid = 'Hhet0A56dokPAQ6MCs7W';

app.get('/status', (_: Request, response: Response) => {
  response.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`🚀 port ${PORT}`);
  new ListenerFirestore().execute(uuid);
});
