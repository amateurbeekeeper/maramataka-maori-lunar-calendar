const maramatakaData = require('../data/maramataka.json');

function getTodayYYYYMMDD() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function findTodayMaramataka(data) {
  const today = getTodayYYYYMMDD();
  return data.find(entry => {
    return today >= entry["Start Date"] && today < entry["End Date"];
  });
}

function getTodayDescription() {
  const todayEntry = findTodayMaramataka(maramatakaData);
  if (todayEntry) {
    return {
      maramataka: todayEntry.Maramataka,
      description: todayEntry["Shortened Descriptions for Website Top Bar (14 words or shorter)"] || todayEntry["Original Description"]
    };
  } else {
    return {
      maramataka: null,
      description: "No maramataka information found for today."
    };
  }
}

function getCurrentDate() {
  return new Date().toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function createMaramatakaBar() {
  const today = getTodayDescription();
  const currentDate = new Date().toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const styles = `
    #top-maramataka-bar {
      background-color: #135a62;
      color: white;
      text-align: center;
      font-size: 11px;
      font-family: 'Public Sans', sans-serif;
      font-weight: 200;
      padding: 8px 10px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
    }

    .has-maramataka-bar .header-announcement-bar-wrapper,
    .has-maramataka-bar header {
      margin-top: 10px;
    }
  `;

  const barHTML = `
    <div id="top-maramataka-bar">
      ${currentDate} &nbsp; | &nbsp; <span style="font-weight: 400;">${today.maramataka}</span> &nbsp; | &nbsp; ${today.description}
    </div>
  `;

  return {
    styles,
    barHTML,
    init: function() {
      const isHomepage =
        window.location.pathname === "/" ||
        window.location.pathname.includes("/home") ||
        window.location.href.includes("/config/pages");

      if (isHomepage) {
        // Add styles
        const styleSheet = document.createElement("style");
        styleSheet.textContent = this.styles;
        document.head.appendChild(styleSheet);

        // Add bar
        const bar = document.createElement("div");
        bar.innerHTML = this.barHTML;
        document.body.prepend(bar);
        document.body.classList.add("has-maramataka-bar");
      }
    }
  };
}

// Export for Node.js
module.exports = {
  getMaramatakaName: () => getTodayDescription().maramataka || '',
  getMaramatakaDescription: () => getTodayDescription().description || '',
  getCurrentDate: () => getCurrentDate(),
  maramatakaData,
  getTodayYYYYMMDD,
  findTodayMaramataka,
  createMaramatakaBar
};

// Export for browser
if (typeof window !== 'undefined') {
  window.maramataka = {
    getMaramatakaName: () => getTodayDescription().maramataka || '',
    getMaramatakaDescription: () => getTodayDescription().description || '',
    getCurrentDate: () => getCurrentDate(),
    maramatakaData,
    getTodayYYYYMMDD,
    findTodayMaramataka,
    createMaramatakaBar
  };
} 