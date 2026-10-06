<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM Exercises</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        section {
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
        }

        button {
            padding: 8px 15px;
            margin: 5px;
            cursor: pointer;
        }

        input, textarea {
            padding: 8px;
            margin: 5px;
        }

        #colorBox {
            width: 150px;
            height: 100px;
            background-color: gray;
            margin: 10px 0;
        }

        #hoverImage {
            width: 250px;
            display: block;
        }

        #caption {
            display: none;
            font-weight: bold;
            margin-top: 10px;
        }

        .hidden {
            display: none;
        }

        li {
            margin: 8px;
        }
    </style>
</head>

<body>

    <h1>JavaScript DOM Practice</h1>

    <!-- 1. Select h1 by ID -->
    <section>
        <h2>1. Change H1 Text</h2>

        <h1 id="mainHeading">Old Heading</h1>

        <button onclick="changeHeading()">Change Heading</button>
    </section>


    <!-- 2. querySelectorAll -->
    <section>
        <h2>2. Change All Paragraph Colors</h2>

        <p>This is paragraph one.</p>
        <p>This is paragraph two.</p>
        <p>This is paragraph three.</p>

        <button onclick="changeParagraphColor()">
            Change Paragraph Color
        </button>
    </section>


    <!-- 3. Background color -->
    <section>
        <h2>3. Change Page Background</h2>

        <button onclick="changeBackground()">
            Change Background
        </button>
    </section>


    <!-- 4. Display input value -->
    <section>
        <h2>4. Display Input Value</h2>

        <input type="text" id="nameInput" placeholder="Enter your name">

        <button onclick="displayInput()">
            Display
        </button>

        <p id="displayName"></p>
    </section>


    <!-- 5. Show / Hide -->
    <section>
        <h2>5. Show / Hide Toggle</h2>

        <button onclick="toggleParagraph()">
            Show / Hide
        </button>

        <p id="toggleText">
            This paragraph can be shown or hidden.
        </p>
    </section>


    <!-- 6. Counter -->
    <section>
        <h2>6. Counter App</h2>

        <button onclick="decreaseCounter()">−</button>

        <span id="counter">0</span>

        <button onclick="increaseCounter()">+</button>
    </section>


    <!-- 7. Color changer -->
    <section>
        <h2>7. Color Changer</h2>

        <div id="colorBox"></div>

        <button onclick="changeBoxColor('red')">Red</button>
        <button onclick="changeBoxColor('green')">Green</button>
        <button onclick="changeBoxColor('blue')">Blue</button>
    </section>


    <!-- 8. Character counter -->
    <section>
        <h2>8. Character Counter</h2>

        <textarea
            id="message"
            rows="5"
            cols="40"
            placeholder="Type something..."
        ></textarea>

        <p>
            Characters:
            <span id="charCount">0</span>
        </p>
    </section>


    <!-- 9 & 10. Add and delete list items -->
    <section>
        <h2>9 & 10. Dynamic List</h2>

        <input
            type="text"
            id="itemInput"
            placeholder="Enter item"
        >

        <button onclick="addItem()">Add</button>

        <ul id="itemList"></ul>
    </section>


    <!-- 11. JSON.stringify -->
    <section>
        <h2>11. Object to JSON</h2>

        <p id="jsonOutput"></p>
    </section>


    <!-- 12. JSON.parse -->
    <section>
        <h2>12. JSON to Object</h2>

        <div id="parsedData"></div>
    </section>


    <!-- 13. Form JSON -->
    <section>
        <h2>13. Form Data as JSON</h2>

        <form id="studentForm">

            <input
                type="text"
                id="studentName"
                placeholder="Name"
                required
            >

            <input
                type="email"
                id="studentEmail"
                placeholder="Email"
                required
            >

            <input
                type="number"
                id="studentAge"
                placeholder="Age"
                required
            >

            <button type="submit">
                Submit
            </button>

        </form>
    </section>


    <!-- 14. Read More / Read Less -->
    <section>
        <h2>14. Read More / Read Less</h2>

        <p id="longText">
            JavaScript is a programming language used to make websites
            interactive. It can change HTML elements, modify CSS styles,
            respond to user actions, validate forms, create dynamic content,
            communicate with servers and much more.
            <span id="moreText" class="hidden">
                JavaScript is one of the most important technologies in
                modern web development and is commonly used together with
                HTML and CSS to build interactive web applications.
            </span>
        </p>

        <button onclick="readMoreLess()" id="readButton">
            Read More
        </button>
    </section>


    <!-- 15. Mouseover / Mouseout -->
    <section>
        <h2>15. Mouseover Image</h2>

        <img
            id="hoverImage"
            src="https://picsum.photos/250/150"
            alt="Sample Image"
        >

        <p id="caption">
            You are hovering over the image!
        </p>
    </section>


    <script>

        // ------------------------------------------------
        // 1. Select h1 by ID and change text
        // ------------------------------------------------

        function changeHeading() {

            document.getElementById("mainHeading").textContent =
                "New Heading!";
        }


        // ------------------------------------------------
        // 2. Select all paragraphs using querySelectorAll
        // ------------------------------------------------

        function changeParagraphColor() {

            const paragraphs =
                document.querySelectorAll("p");

            paragraphs.forEach(function(paragraph) {

                paragraph.style.color = "blue";

            });
        }


        // ------------------------------------------------
        // 3. Change page background color
        // ------------------------------------------------

        function changeBackground() {

            document.body.style.backgroundColor = "lightyellow";
        }


        // ------------------------------------------------
        // 4. Display input value
        // ------------------------------------------------

        function displayInput() {

            const input =
                document.getElementById("nameInput").value;

            document.getElementById("displayName").textContent =
                "You entered: " + input;
        }


        // ------------------------------------------------
        // 5. Show / Hide using classList.toggle()
        // ------------------------------------------------

        function toggleParagraph() {

            document
                .getElementById("toggleText")
                .classList.toggle("hidden");
        }


        // ------------------------------------------------
        // 6. Counter app
        // ------------------------------------------------

        let count = 0;

        function increaseCounter() {

            count++;

            document.getElementById("counter").textContent =
                count;
        }

        function decreaseCounter() {

            count--;

            document.getElementById("counter").textContent =
                count;
        }


        // ------------------------------------------------
        // 7. Color changer
        // ------------------------------------------------

        function changeBoxColor(color) {

            document.getElementById("colorBox").style.backgroundColor =
                color;
        }


        // ------------------------------------------------
        // 8. Character counter
        // ------------------------------------------------

        document
            .getElementById("message")
            .addEventListener("input", function() {

                const text = this.value;

                document.getElementById("charCount").textContent =
                    text.length;

            });


        // ------------------------------------------------
        // 9 & 10. Add and delete list items
        // ------------------------------------------------

        function addItem() {

            const input =
                document.getElementById("itemInput");

            const itemText = input.value.trim();

            if (itemText === "") {

                alert("Please enter an item.");

                return;
            }

            const li = document.createElement("li");

            li.textContent = itemText + " ";

            const deleteButton =
                document.createElement("button");

            deleteButton.textContent = "Delete";

            deleteButton.onclick = function() {

                li.remove();

            };

            li.appendChild(deleteButton);

            document
                .getElementById("itemList")
                .appendChild(li);

            input.value = "";
        }


        // ------------------------------------------------
        // 11. Convert object to JSON
        // ------------------------------------------------

        const student = {

            name: "Arun",
            age: 21,
            course: "Full Stack Development"

        };

        const jsonString =
            JSON.stringify(student);

        document.getElementById("jsonOutput").textContent =
            jsonString;


        // ------------------------------------------------
        // 12. Convert JSON to object using JSON.parse()
        // ------------------------------------------------

        const jsonData =
            '{"name":"Arun","age":21,"course":"JavaScript"}';

        const parsedStudent =
            JSON.parse(jsonData);

        document.getElementById("parsedData").innerHTML =
            "Name: " + parsedStudent.name + "<br>" +
            "Age: " + parsedStudent.age + "<br>" +
            "Course: " + parsedStudent.course;


        // ------------------------------------------------
        // 13. Form values as JSON object
        // ------------------------------------------------

        document
            .getElementById("studentForm")
            .addEventListener("submit", function(event) {

                event.preventDefault();

                const formData = {

                    name:
                        document.getElementById("studentName").value,

                    email:
                        document.getElementById("studentEmail").value,

                    age:
                        document.getElementById("studentAge").value

                };

                console.log(JSON.stringify(formData));

            });


        // ------------------------------------------------
        // 14. Read More / Read Less
        // ------------------------------------------------

        function readMoreLess() {

            const moreText =
                document.getElementById("moreText");

            const button =
                document.getElementById("readButton");

            moreText.classList.toggle("hidden");

            if (moreText.classList.contains("hidden")) {

                button.textContent = "Read More";

            } else {

                button.textContent = "Read Less";
            }
        }


        // ------------------------------------------------
        // 15. Mouseover / Mouseout
        // ------------------------------------------------

        const image =
            document.getElementById("hoverImage");

        const caption =
            document.getElementById("caption");


        image.addEventListener("mouseover", function() {

            caption.style.display = "block";

        });


        image.addEventListener("mouseout", function() {

            caption.style.display = "none";

        });

    </script>

</body>
</html>
