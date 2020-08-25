window.onload = function () {
  
    var chart = new OrgChart(document.getElementById("tree"), {
      mouseScrool: OrgChart.action.scroll,
      layout: OrgChart.mixed,
      template: "base",
      nodes: [
      { id: "1"   },
          { id: "2" , pid: "1" },
          { id: "3" , pid: "1" },
          { id: "4" , pid: "1" },
          { id: "5" , pid: "2" },
          { id: "6" , pid: "2" },
          { id: "7" , pid: "2" },
          { id: "8" , pid: "3" },
          { id: "9" , pid: "3" },
          { id: "10", pid: "3"  },
          { id: "11", pid: "4"  },
          { id: "12", pid: "4"  },
          { id: "14", pid: "5"  },
          { id: "15", pid: "5"  },
          { id: "16", pid: "5"  },
          { id: "17", pid: "6"  },
          { id: "18", pid: "6"  },
          { id: "19", pid: "6"  },
          { id: "20", pid: "7"  },
          { id: "21", pid: "7"  },
          { id: "22", pid: "7"  },
          { id: "23", pid: "8"  },
          { id: "24", pid: "8"  },
          { id: "25", pid: "8"  },
          { id: "26", pid: "9"  },
          { id: "27", pid: "9"  },
          { id: "28", pid: "9"  },
          { id: "29", pid: "10" },
          { id: "30", pid: "10" },
          { id: "31", pid: "10" },
          { id: "32", pid: "11" },
          { id: "33", pid: "11" },
          { id: "34", pid: "11" },
          { id: "35", pid: "12" },
          { id: "36", pid: "12" },
          { id: "37", pid: "12" },
          { id: "38", pid: "4"  },
          { id: "39", pid: "38" },
          { id: "41", pid: "38" },
          { id: "42", pid: "38" },
          { id: "43", pid: "5" },
          { id: "44", pid: "6" },
          { id: "45", pid: "7" },
          { id: "46", pid: "8" },
          { id: "47", pid: "9" },
          { id: "48", pid: "10" },
          { id: "49", pid: "11" },
          { id: "50", pid: "12" },
          { id: "51", pid: "38" },
          { id: "52", pid: "5" },
          { id: "53", pid: "6" },
          { id: "54", pid: "7" },
          { id: "55", pid: "8" },
          { id: "56", pid: "9" },
          { id: "57", pid: "10" },
          { id: "58", pid: "11" },
          { id: "59", pid: "12" },
          { id: "60", pid: "38" }
      ]    
});
};