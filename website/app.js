/* Global Variables */
const apiKey = "b20797cf6ad176901718d495a93efe26",
    baseURL = "https://api.openweathermap.org/data/2.5/weather",
    zip = document.getElementById("zip"),
    feel = document.getElementById("feelings"),
    generate = document.getElementById("generate"),


    //  Create a new date instance dynamically with JS

    d = new Date(),
    newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;
// Set EventListener

generate.addEventListener(
    "click",
    performAction
);
// The performAction function
function performAction(e) {

    const newZip = zip.value,
        feelings = feel.value;

    /*
     *  The performAction function contains 3 async functions will follow eachother,
     *  Chaining the data with .then() method which returns promise
     *  The getData function gets the data from the server
     */
    getData(
        baseURL,
        newZip,
        apiKey
    ).then((data) => {

        // The postData function sends the data to the server
        postData(
            "/add", {
                "date": newDate,
                "temp": data.main.temp,
                "content": feelings
            }
        );
        // The updateUI function updates the data dynamically

    }).
    then(() => updateUI());


}
// Define the getData function
const getData = async (baseURL, newZip, apiKey) => {

        // Waiting for the data come from URL + the value the user enters + the apiKey
        const req = await fetch(`${baseURL}?zip=${newZip}&appid=${apiKey}&units=metric`);

        try {

            // Translating the data to JSON
            const res = await req.json();

            // Returning the data translated to json
            return res;
            // Catching error if there any

        } catch (error) {

            console.log(
                error,
                "error"
            );

        }

    },

    /*
     * Define the postData function
     *  Waiting for the data come from the POST route and translate it to JSON
     */
    postData = async (url = "", data = {}) => {

            await fetch(
                url,
                // Define the data in the POST request
                {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            try {

                // Because the data are already JSON so I will return the data as it is
                return;
                // Catching error if there any

            } catch (error) {

                error,
                "error";

            }

        },

        // Define updateUI function
        updateUI = async () => {

            // Waiting for the data to arrive from the GET route
            const req = await fetch("/all");

            try {

                // Translating the data to josn
                const allData = await req.json();
                // Pushing the updates to the HTML module

                document.getElementById("date").innerHTML = `Date: ${allData.date}`;
                document.getElementById("temp").innerHTML = `Temp: ${allData.temp}`;
                document.getElementById("content").innerHTML = `I feel: ${allData.content}`;

                // Catching error if there any

            } catch (error) {

                console.log(
                    error,
                    "error"
                );

            }

        };
