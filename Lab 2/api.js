// async await ----------------------------
//[Chu y]: bat buoc phai nam trong 1 funciton
async function call_api1() {
    const json = await fetch(
        "https://handlers.education.launchcode.org/static/planets.json"
    );
    const data = json.json();
    data
    .then((planets) => {
        // load danh sach len man hinh
        const html = planets.map((planet) => `<h6>${planet.name}</h6>`);
        document.write(html.join(""));
    })
    .catch((error) => console.log(error));
}

call_api1();

// ========================================
async function call_api2() {
    try {
      const response = await fetch(
        "https://handlers.education.launchcode.org/static/planets.json"
      );
      const planets = await response.json();
      const results = [];
      planets.forEach((planet) => {
        results.unshift(`<h6>${planet.name}</h6>`);
      });
      document.write(results.join(" "));
    } catch (error) {
      console.error(error);
    }
  }
  
  call_api2();