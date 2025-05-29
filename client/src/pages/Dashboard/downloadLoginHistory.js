// src/utils/LogedInHistory.js

export function downloadLoginHistory() {
  const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];

  if (loginHistory.length === 0) {
    alert('No login history to download.');
    return;
  }

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleString();
  };

  const header = `# | Date & Time           | Email                  | Password\n` +
                 `--|-----------------------|------------------------|----------------\n`;

  const content = loginHistory
    .map(({ dateTime, email, password }, index) =>
      `${(index + 1).toString().padEnd(2)}| ${formatDate(dateTime).padEnd(21)} | ${email.padEnd(22)} | ${password}`
    )
    .join('\n');

  const fullContent = header + content;

  const blob = new Blob([fullContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'LoginHistory.txt';
  a.click();

  URL.revokeObjectURL(url);
}
