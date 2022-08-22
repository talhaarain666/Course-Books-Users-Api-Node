const fs = require("fs");
const path = require("path");
const http = require("http");

const users = [
    {
        name: "Talha",
        email: "abc@gmail.com",
        id: 1
    },
    {
        name: "Huzaifa",
        email: "huz@gmail.com",
        id: 2
    },
    {
        name: "Urwa",
        email: "urwa@gmail.com",
        id: 3
    }
]


const express = require("express");
const app = express();

app.use(express.json());


// // .................... GET DATA

// app.get("/users", (req, res) => {
//     res.send(users).status(200);
// });

// // ................... GET DATA BY ID

// app.get("/users/:id", (req, res) => {
//     let obj = users.find((x) => x.id == req.params.id);
//     if (!obj) {
//         res.send("No Data Found").status(404);
//     } else {
//         res.send(obj).status(200);
//     }
// });

// // ....................POST DATA

//   app.post("/users", (req, res) => {
//     let { name, email } = req.body;

//     if (!name) {
//       res.send("Name is Required").status(400);
//       return;
//     }

//     if (!email) {
//       res.send("Email is Required").status(400);
//       return;
//     }

//     let obj = {
//       name,
//       email,
//       dateTime: new Date(),
//       id: users.length + 1,
//     };
//     users.push(obj);
//     res.send(obj).status(200);
//   });

// // ................ EDIT DATA

//   app.put("/users/:id", (req, res) => {
//     let obj = users.find((x) => x.id == req.params.id);
//     if (!obj) {
//       res.send("Data Not Found").status(400);
//       return;
//     }
//     if (obj) {
//       let i = users.findIndex((x) => x.id == req.params.id);
//       users[i] = { ...users[i], ...req.body };
//       res.send(users[i]).status(200);
//       return;
//     }
//   });

//   app.delete("/users/:id", (req, res) => {
//     let i = users.findIndex((x) => x.id == req.params.id);
//     if (i != -1) {
//       users.splice(i, 1);
//       res.send("successfully Deleted").status(200);
//     }
//   });

// ........................  COURSES  ................................

const course = [
    {
        courseName: "Web development",
        courseDetails: "cbjfgjhgfjgfjfjkgfjfgjgjyruetjurtry",
        campus: "campusLocation",
        id: 1
    },
    {
        courseName: "Graphic Designing",
        courseDetails: "tjururyhrthrtdtjtjrtjyjry",
        campus: "campusLocation",
        id: 2
    },
    {
        courseName: "Mobile Application Development",
        courseDetails: "dfhdtjrykryhsrfhdthydrhrhrrgthdtghd",
        campus: "campusLocation",
        id: 3
    }
]





// // .................... GET DATA

// app.get("/course", (req, res) => {
//     res.send(course).status(200);
// });

// // ................... GET DATA BY ID

// app.get("/course/:id", (req, res) => {
//     let obj = course.find((x) => x.id == req.params.id);
//     if (!obj) {
//         res.send("No Data Found").status(404);
//     } else {
//         res.send(obj).status(200);
//     }
// });

// // ....................POST DATA

// app.post("/course", (req, res) => {
//     let { courseName, courseDetails, campus } = req.body;

//     if (!courseName) {
//         res.send("course Name is Required").status(400);
//         return;
//     }

//     if (!courseDetails) {
//         res.send("course Details is Required").status(400);
//         return;
//     }
//     if (!campus) {
//         res.send("campus is Required").status(400);
//         return;
//     }

//     let obj = {
//         courseName,
//         courseDetails,
//         campus,
//         dateTime: new Date(),
//         id: course.length + 1,
//     };
//     course.push(obj);
//     res.send(obj).status(200);
// });

// // ................ EDIT DATA

// app.put("/course/:id", (req, res) => {
//     let obj = course.find((x) => x.id == req.params.id);
//     if (!obj) {
//         res.send("Data Not Found").status(400);
//         return;
//     }
//     if (obj) {
//         let i = course.findIndex((x) => x.id == req.params.id);
//         course[i] = { ...course[i], ...req.body };
//         res.send(course[i]).status(200);
//         return;
//     }
// });

// app.delete("/course/:id", (req, res) => {
//     let i = course.findIndex((x) => x.id == req.params.id);
//     if (i != -1) {
//         course.splice(i, 1);
//         res.send("successfully Deleted").status(200);
//     }
// });

// app.listen(3000);




// ................................... BOOKS API ........


const books = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        publisher: "Houghton Mifflin",
        country: "USA",
        id: 1

    },
    {
        title: "Slinky Malinki",
        author: "Lynley Dodd",
        publisher: "Mallinson Rendel",
        country: "NZ",
        id: 2
    },
    {
        title: "Hairy Maclary from Donaldson's Dairy",
        author: "Lynley Dodd",
        publisher: "Mallinson Rendel",
        country: "NZ",
        id: 3
    },
    {
        title: "How to Lie with Statistics",
        author: "Darrell Huff",
        publisher: "W. W. Norton",
        country: "USA",
        id: 4

    }
]



// .................... GET DATA

app.get("/books", (req, res) => {
    res.send(books).status(200);
});

// ................... GET DATA BY ID

app.get("/books/:id", (req, res) => {
    let obj = books.find((x) => x.id == req.params.id);
    if (!obj) {
        res.send("No Data Found").status(404);
    } else {
        res.send(obj).status(200);
    }
});

// ....................POST DATA

app.post("/books", (req, res) => {
    let { title, author, publisher, country } = req.body;

    if (!title) {
        res.send("title is Required").status(400);
        return;
    }

    if (!author) {
        res.send("author is Required").status(400);
        return;
    }
    if (!publisher) {
        res.send("publisher is Required").status(400);
        return;
    }
    if (!country) {
        res.send("country is Required").status(400);
        return;
    }

    let obj = {
        title,
        author,
        publisher,
        country,
        dateTime: new Date(),
        id: books.length + 1,
    };
    books.push(obj);
    res.send(obj).status(200);
});

// ................ EDIT DATA

app.put("/books/:id", (req, res) => {
    let obj = books.find((x) => x.id == req.params.id);
    if (!obj) {
        res.send("Data Not Found").status(400);
        return;
    }
    if (obj) {
        let i = books.findIndex((x) => x.id == req.params.id);
        books[i] = { ...books[i], ...req.body };
        res.send(books[i]).status(200);
        return;
    }
});

app.delete("/books/:id", (req, res) => {
    let i = books.findIndex((x) => x.id == req.params.id);
    if (i != -1) {
        books.splice(i, 1);
        res.send("successfully Deleted").status(200);
    }
});

app.listen(3000);