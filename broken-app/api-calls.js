const axios = require('axios');

async function getUsers(users) {
    const response = [];
    for (const user of users) {
        try {
            console.log(user)
            const userData = await axios.get(`https://api.github.com/users/${user}`, {headers: {'Accept': 'application/vnd.github+json', 'Accept': '*/*'}});
            response.push({name: userData.data.name, bio: userData.data.bio});
        } catch (error) {
            console.log(error)
            response.push({user: user, failed: 'User data not found.'});
        }
    }
    return response;
}

module.exports = {
    getUsers : getUsers
}