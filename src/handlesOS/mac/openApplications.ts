import childProcess from 'child_process';
import util from 'util';

class OpenApplicationMacOS {
  public async execute(application: string): Promise<string> {
    const exec = util.promisify(childProcess.exec);

    const isCompost = application.split(' ').length > 1;

    const command = isCompost
      ? `open -a "${application}"`
      : `open -a ${application}`;

    return exec(command)
      .then(() => `Open ${application}`)
      .catch(() => 'Application not found!');
  }
}

export default OpenApplicationMacOS;
