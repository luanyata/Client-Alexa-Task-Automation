import childProcess from 'child_process';

import util from 'util';
import CheckApplicationInstallTerminal from './checkApplicationInstallTerminal';

class ExecTerminalApplication {
  private execFile = util.promisify(childProcess.execFile);

  public async execute(application: string): Promise<string> {
    const contains = await new CheckApplicationInstallTerminal().execute(
      application,
    );

    if (contains) {
      this.execFile(application);
      return `Open ${application} ...`;
    }

    return 'Application not found!';
  }
}

export default ExecTerminalApplication;
