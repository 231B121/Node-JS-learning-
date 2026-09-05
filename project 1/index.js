const express = require("express");
const user = require("./MOCK_DATA.json");

const app = express();


const PORT = 8000;

``
app.get("/user", (req, res) => {
    return res.json(user);
});
app.get("/user/api", (req, res) => {
    const html = `
        <ul>
            ${user.map((user) => `
                <li>
                    Name: ${user.first_name} ${user.last_name}<br>
                    Email: ${user.email}<br>
                    City: ${user.city}
                </li>
                <br>
            `).join("")}
        </ul>
    `;

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});