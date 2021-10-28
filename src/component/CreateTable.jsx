import React from "react";
import "./Style.css";
import json_data from "./data.js";

function CreateTable() {
  //visitor count
  function totalVisitor(data, prop) {
    let mapVisitors = data.map((key) => key[prop]);
    return mapVisitors;
  }
  const Totalresult = totalVisitor(json_data, "visitors");
  console.log(Totalresult);
  var totalVisitorCount = json_data.reduce(function (sum, item) {
    return (sum = sum + item.visitors);
  }, 0);
  console.log(totalVisitorCount);

  //--------------Animal----------------------------//
  let ainmalCount = json_data.filter((item) => {
    return item.group === "animal";
  });
  console.log(ainmalCount);
  function ainmalVisitors(data, prop) {
    let mapVisitors = data.map((key) => key[prop]);
    return mapVisitors;
  }
  const totalAnimal = ainmalVisitors(ainmalCount, "visitors");
  console.log(totalAnimal);
  const totalAnimalTime = ainmalVisitors(ainmalCount, "appearanceTimeInSecs");
  console.log(totalAnimalTime);
  var Time = 0;
  for (let i = 0; i < totalAnimalTime.length; i++) {
    Time = Time + totalAnimalTime[i];
  }
  console.log(Time);
  var minutes = Math.floor(Time / 60);
  console.log(minutes);

  var count_of_animal = 0;
  for (let i = 0; i < totalAnimal.length; i++) {
    count_of_animal = count_of_animal + totalAnimal[i];
  }
  console.log(count_of_animal);

  const rateAnimal = Math.round((count_of_animal * 100) / totalVisitorCount);
  console.log(rateAnimal);

  //-----------------Bird-----------------//
  let birdCount = json_data.filter((item) => {
    return item.group === "bird";
  });
  console.log(birdCount);
  function birdVisitors(data, prop) {
    let mapVisitors = data.map((key) => key[prop]);
    return mapVisitors;
  }
  const totalBird = birdVisitors(birdCount, "visitors");
  console.log(totalBird);

  var count_of_Bird = 0;
  for (let i = 0; i < totalBird.length; i++) {
    count_of_Bird = count_of_Bird + totalBird[i];
  }
  console.log(count_of_Bird);
  const rateBird = Math.round((count_of_Bird * 100) / totalVisitorCount);
  console.log(rateBird);

  const totalBirdTime = ainmalVisitors(birdCount, "appearanceTimeInSecs");
  console.log(totalBirdTime);
  var BirdTime = 0;
  for (let i = 0; i < totalBirdTime.length; i++) {
    BirdTime = BirdTime + totalBirdTime[i];
  }
  console.log(BirdTime);
  var minutes1 = Math.floor(BirdTime / 60);
  console.log(minutes1);

  //------------------Fish-----------------------//
  let fishCount = json_data.filter((item) => {
    return item.group === "fish";
  });
  console.log(fishCount);
  function fishVisitors(data, prop) {
    let mapVisitors = data.map((key) => key[prop]);
    return mapVisitors;
  }
  const totalFish = fishVisitors(fishCount, "visitors");
  console.log(totalFish);

  var count_of_Fish = 0;
  for (let i = 0; i < totalFish.length; i++) {
    count_of_Fish = count_of_Fish + totalFish[i];
  }
  console.log(count_of_Fish);
  const rateFish = Math.round((count_of_Fish * 100) / totalVisitorCount);
  console.log(rateFish);

  const totalFishTime = ainmalVisitors(fishCount, "appearanceTimeInSecs");
  console.log(totalFishTime);
  var FishTime = 0;
  for (let i = 0; i < totalFishTime.length; i++) {
    FishTime = FishTime + totalFishTime[i];
  }
  console.log(FishTime);
  var minutes2 = Math.floor(FishTime / 60);
  console.log(minutes2);

  //--------------Person--------------//
  let personCount = json_data.filter((item) => {
    return item.group === "person";
  });
  console.log(personCount);
  function personVisitors(data, prop) {
    let mapVisitors = data.map((key) => key[prop]);
    return mapVisitors;
  }
  const totalPerson = personVisitors(personCount, "visitors");
  console.log(totalPerson);

  var count_of_persons = 0;
  for (let i = 0; i < totalPerson.length; i++) {
    count_of_persons = count_of_persons + totalPerson[i];
  }
  console.log(count_of_persons);
  const ratePerson = Math.round((count_of_persons * 100) / totalVisitorCount);
  console.log(ratePerson);

  const totalPersonTime = ainmalVisitors(personCount, "appearanceTimeInSecs");
  console.log(totalPersonTime);
  var PersonTime = 0;
  for (let i = 0; i < totalPersonTime.length; i++) {
    PersonTime = PersonTime + totalPersonTime[i];
  }
  console.log(PersonTime);
  var minutes3 = Math.floor(PersonTime / 60);
  console.log(minutes3);

  return (
    <div>
      <h2>Date Range : </h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>visitors</th>
            <th>rate</th>
            <th>appearance time (min)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {" "}
            <th>animal</th>
            <th>{count_of_animal}</th>
            <th>{rateAnimal} %</th>
            <th>{minutes}</th>
          </tr>
          <tr>
            {" "}
            <th>bird</th>
            <th>{count_of_Bird}</th>
            <th>{rateBird} %</th>
            <th>{minutes1}</th>
          </tr>
          <tr>
            {" "}
            <th>fish</th>
            <th>{count_of_Fish}</th>
            <th>{rateFish} %</th>
            <th>{minutes2}</th>
          </tr>
          <tr>
            {" "}
            <th>person</th>
            <th>{count_of_persons}</th>
            <th>{ratePerson} %</th>
            <th>{minutes3}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CreateTable;
