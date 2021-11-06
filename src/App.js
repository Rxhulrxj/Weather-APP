import "./App.css";
const Api = {
  key: "98ff436b7c20596466311487b2531a16",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const datebuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="App">
      <div className="Main">
        <img
          src="https://source.unsplash.com/1920x1080?nature"
          alt="Background"
          className="Background"
        />
        <div className="weather-container">
          <div className="Search">
            <input
              type="text"
              className="Search-bar"
              placeholder="Search here..."
            />
          </div>
          <div className="weather-info">
            <div className="location">Trivandrum,Kerala,India</div>
            <div className="date">{datebuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">15&deg;</div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </div>
      <div className="mobscreen">
        <img src={require("./Assests/Oops.gif").default} alt="oops" />
        <h4>
          Sorry <br /> This site is Currently unavailable for Mobile Devices
        </h4>
      </div>
    </div>
  );
}

export default App;
