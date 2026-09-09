const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

// Middleware
app.use(express.json());


// ================= GET ALL USERS =================

app.get("/user/api/home", (req, res) => {
    return res.json(users);
});


// ================= GET / PATCH / DELETE USER =================

app
    .route("/api/user/:id")

    // GET SINGLE USER
    .get((req, res) => {
        const id = Number(req.params.id);

        const foundUser = users.find((user) => user.id === id);

        if (!foundUser) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        return res.json(foundUser);
    })

    // PATCH USER
    .patch((req, res) => {
        const id = Number(req.params.id);

        const foundUser = users.find((user) => user.id === id);

        if (!foundUser) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        // Update only the fields received in body
        Object.assign(foundUser, req.body);

        return res.json({
            status: "success",
            message: "User updated successfully",
            user: foundUser
        });
    })

    // DELETE USER
    .delete((req, res) => {
        const id = Number(req.params.id);

        const index = users.findIndex((user) => user.id === id);

        if (index === -1) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);

        return res.json({
            status: "success",
            message: "User deleted successfully",
            user: deletedUser[0]
        });
    });


// ================= POST CREATE USER =================

app.post("/user/api", (req, res) => {

    const body = req.body;

    // Basic validation
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({
            status: "error",
            message: "first_name, last_name and email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
        city: body.city
    };

    users.push(newUser);

    return res.status(201).json({
        status: "success",
        message: "User created successfully",
        user: newUser
    });
});


// ================= SERVER =================

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});