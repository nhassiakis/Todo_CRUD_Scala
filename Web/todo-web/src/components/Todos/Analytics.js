import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

function Analytics() {
  const [numOfCompletedTasks, setCompleted] = useState("");
  const [averageTime, setDate] = useState("");
  const [dow, setDayInfo] = useState("");
  const [totalTasks, setTotalTasks] = useState("");

  function loadTodos() {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.get("http://localhost:9000/api/todos").then((res) => {
      const todo = res.data;
      var numOfCompletedTasksLocal = 0;
      var completeTimeList = [];

      const dowArray = [
        { day: "monday", counter: 0 },
        { day: "tuesday", counter: 0 },
        { day: "wednesday", counter: 0 },
        { day: "thursday", counter: 0 },
        { day: "friday", counter: 0 },
        { day: "saturday", counter: 0 },
        { day: "sunday", counter: 0 },
      ];

      setTotalTasks(todo.length);

      todo.forEach((complete) => {
        if (complete.isComplete === true) {
          numOfCompletedTasksLocal++;

          // Get time difference from start and endate with moment.js library
          const startDate = Moment.utc(complete.createdAt);
          const timeEnd = Moment.utc(complete.completedAt);
          // get difference in milliseconds
          const diff = timeEnd.diff(startDate);

          completeTimeList.push(diff);

          
          const dowText = getDoW(timeEnd.isoWeekday());
          if (dowText) {
            dowArray.forEach((currentDow) => {
              if (currentDow.day === dowText) {
                currentDow.counter++;
              }
            });
          }
        }
      });

      const dowGet = dowArray.filter((wod) => Math.max(wod.counter));
      var dayOfWeek = dowGet;
      setDayInfo(dayOfWeek[0].day);
      

      if (completeTimeList.length > 0) {
        //get average time
        const arrAvg =
          completeTimeList.reduce((a, b) => a + b, 0) / completeTimeList.length;
        //setDate with milliseconds to minutes
        setDate(arrAvg);
      }
     
      setCompleted(numOfCompletedTasksLocal);
      
    });
  }

  function getDoW(dow) {
    switch (dow) {
      case 1:
        return "monday";
        break;
      case 2:
        return "tuesday";
        break;
      case 3:
        return "wednesday";
        break;
      case 4:
        return "thursday";
        break;
      case 5:
        return "friday";
        break;
      case 6:
        return "saturday";
        break;
      case 7:
        return "sunday";
        break;
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
    <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
      <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
          >
          Back To Home
      </Link>
    </div>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold"></h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className=" border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        TODO Analytics
                      </th>
                    </tr>
                  </thead>
                  <tbody className="top-20 border-black border-b-2">
                    <tr className="bg-white border-b-2 border-black">
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        Number of completed tasks: {numOfCompletedTasks} out of{" "}
                        {totalTasks}
                      </td>
                    </tr>
                    <tr className="bg-white border-b-2 border-black">
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        Average time to complete tasks in minutes:{" "}
                        {(averageTime / 60000).toFixed(1)} <br/>
                        Average time to complete tasks in hours:{" "}
                        {(averageTime / 3600000).toFixed(2)}
                        <br/>
                        Average time to complete tasks in days:{" "}
                        {(averageTime / 86400000).toFixed(3)}
                      </td>
                    </tr>
                    <tr className="bg-white border-b-2 border-black">
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        Most productive day of the week:
                        <br />
                        {dow}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
