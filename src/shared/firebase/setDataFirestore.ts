import admin from '.';

class SetDataFirestore {
  public execute(uuid: string, message = 'install node ts'): void {
    const db = admin.firestore();

    db.collection('users')
      .doc(uuid)
      .collection('response')
      .add({
        [new Date().getTime().toString()]: message,
      });
  }
}

export default SetDataFirestore;
