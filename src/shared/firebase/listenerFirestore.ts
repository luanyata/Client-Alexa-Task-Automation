import admin from '.';

class ListenerFirestore {
  public execute(uuid: string): void {
    const db = admin.firestore();

    db.collection('users')
      .doc(uuid)
      .collection('Inbound')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(doc => {
          if (doc.type === 'added') {
            console.log('added');
          }

          if (doc.type === 'modified') {
            console.log('modeified');
          }

          if (doc.type === 'removed') {
            console.log('removed');
          }
        });
      });
  }
}

export default ListenerFirestore;
