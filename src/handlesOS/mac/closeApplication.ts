import childProcess from 'child_process';
import util from 'util';

class CloseApplicationMacOS {
  public async execute(application: string): Promise<string> {
    const exec = util.promisify(childProcess.exec);

    const command = `osascript -e 'quit application "${application}"'`;

    return exec(command)
      .then(() => `Fechando ${application}`)
      .catch(() => 'Application not found!');
  }
}

export default CloseApplicationMacOS;
