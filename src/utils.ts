import fs from 'fs';
import readline from 'readline';

export function removeParenthesizedText(s: string): string {
  return s.replace(/\s*[([].*?[)\]]\s*/g, '');
}

export function isDirectory(dirPath: string): boolean {
  return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
}

export async function userInput(prompt: string, defaultInput?: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(prompt, (response) => {
      rl.close();
      if (response) {
        resolve(response);
      } else {
        reject(new Error('Invalid response: ' + response));
      }
    });
    rl.write(defaultInput || '');
  });
}
