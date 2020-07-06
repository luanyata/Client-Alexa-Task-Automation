import 'dotenv/config';
import express, { Request, Response } from 'express';
import './shared/firebase';

import SetDataFirestore from 'shared/firebase/setDataFirestore';
import ListenerFirestore from 'shared/firebase/listenerFirestore';
import OpenApplicationMacOS from './handlesOS/mac/openApplications';
// import ExecTerminalApplication from './helpersOS/mac/exec-terminal-applications';

const PORT = 6944;
const app = express();
app.use(express.json());

const uuid = 'Hhet0A56dokPAQ6MCs7W';

app.get('/terminal/:program', async (request: Request, response: Response) => {
  // const { program } = request.params;
  // const status = await ExecTerminalApplication(program);
  new SetDataFirestore().execute(uuid);
  response.json({ status: 'OK' });
});

app.get(
  '/application/:program',
  async (request: Request, response: Response) => {
    const { program } = request.params;
    const status = await new OpenApplicationMacOS().execute(program);

    response.json({ status });
  },
);

app.listen(PORT, () => {
  console.log(`🚀 port ${PORT}`);
  new ListenerFirestore().execute(uuid);
});
