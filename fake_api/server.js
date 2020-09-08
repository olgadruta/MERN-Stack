const express = require("express");
const app = express();
const faker = require("faker")

app.get("/api/user/new", (req, res) => {
    res.send(newUser);
});
app.get("/api/company/new", (req, res) => {
    res.send(newCompany);
});
app.get("/api/user/company", (req, res) => {
    res.send({newUser, newCompany});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


class User{
    constructor(){
        this.id=faker.random.number(),
        this.firstName=faker.name.firstName(),
        this.lastName=faker.name.lastName(),
        this.phoneNumber=faker.phone.phoneNumber(),
        this.email=faker.internet.email(),
        this.password= faker.internet.password()
    }
}

const newUser = new User();

class Company {
    constructor(){
        this.id=faker.random.number();
        this.name=faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

const newCompany = new Company();