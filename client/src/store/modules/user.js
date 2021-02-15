export default {
    actions: {

    },
    mutations: {

    },
    getters: {
        getUserById: () => async id => {
            const payload = {_id: id};
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            return data;
        }
    },
    state: {

    }
}