import childProcess from 'child_process';
import util from 'util';

class CheckApplicationInstallTerminal {
  private execFile = util.promisify(childProcess.execFile);

  public async execute(application: string): Promise<boolean> {
    const { stdout } = await this.execFile(application, ['--version']);
    return !!stdout;
  }
}

export default CheckApplicationInstallTerminal;
