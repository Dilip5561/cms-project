class HistoryService {
  constructor() {
    let data = localStorage.getItem("history");
    if (data === null) {
      data = {
        logs: [],
      };
      localStorage.setItem("history", JSON.stringify(data));
      this.history = data;
    } else {
      this.history = JSON.parse(data);
    }
  }

  logActivity(email, activity) {
    const timestamp = new Date().toISOString();
    this.history.logs.push({ email, activity, timestamp });
    localStorage.setItem("history", JSON.stringify(this.history));
  }

  getUserHistory(email) {
    return this.history.logs.filter((log) => log.email === email);
  }

  getAllHistory() {
    return this.history.logs;
  }

  clearHistory() {
    this.history = { logs: [] };
    localStorage.setItem("history", JSON.stringify(this.history));
  }
}

const historyService = new HistoryService();
export default historyService;
