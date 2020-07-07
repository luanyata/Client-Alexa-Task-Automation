import OpenApplicationMacOS from 'handlesOS/mac/openApplications';
import CloseApplicationMacOS from 'handlesOS/mac/closeApplication';
import admin from '.';
import TypeCategory from '../utils/typesCategory';

interface Command {
  type: string;
  program: string;
}
class ListenerFirestore {
  public execute(uuid: string): void {
    const db = admin.firestore();

    db.collection('users')
      .doc(uuid)
      .collection('commands')
      .orderBy('dateExecute', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(command => {
          const data = command.doc.data() as Command;

          if (command.type === 'added') {
            if (data.type === TypeCategory.OPEN_PROGRAM)
              new OpenApplicationMacOS().execute(data.program);
            else if (data.type === TypeCategory.CLOSE_PROGRAM) {
              new CloseApplicationMacOS().execute(data.program);
            }
          }
        });
      });
  }
}

export default ListenerFirestore;
