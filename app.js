class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name) {
        this.name = name; 
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        /* returning 'this' which will return or evaluate to the object
        and whatever fields you've given it allowing you to chain these
        methods together */
        // console.log('happened');
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user;
    }
}

let user = new UserBuilder('Bob').setAge(20).setPhone('111-222-3334').setAddress(new Address('20321', 'Road Blvd')).build();
console.log(user);