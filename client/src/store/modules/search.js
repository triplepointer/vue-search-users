import XRegExp from'xregexp';

const isNumber = function(str) {
    var pattern = /\d/;
    return pattern.test(str);  // returns a boolean
}
const isEmailAddress = function(str) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean
}
const isLetter = function(str) {
    return XRegExp("^\\pL+$").test(str);
}

export default {
    actions: {
        async fetchUsers({commit}, payload) {
            const rawResponse = await fetch('api/users', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              });
            const data = await rawResponse.json();
            commit('setUsers', data);
        },
        updateIsSubmitClicked({commit}) {
            commit('setIsSubmitClicked');
        },
        updateName({commit}, name) {
            commit('setName', name);
            commit('setNameErrorStatus', isNumber(name));
        },
        updateEmail({commit},email) {
            commit('setEmail',email);
            commit('setEmailErrorStatus', isEmailAddress(email));
        },
        updatePhone({commit}, phone) {
            commit('setPhone', phone);
            commit('setPhoneErrorStatus', isLetter(phone));
        },
        updateBirth({commit}, birth) {
            commit('setBirth', birth);
        }
    },
    state: {
        form: {
            name: '',
            phone: '',
            email: '',
            birth: ''
        },
        isSubmitClicked: false,
        users: [],
        errors: {
            phone: {
                hasLetters: false
            },
            name: {
                hasDigits: false
            },
            email: {
                isNotEmail: true
            },
            birth: {
            }

        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setNameErrorStatus(state, status) {
            state.errors.name.hasDigits = status;
        },
        setEmailErrorStatus(state, status) {
            state.errors.email.isNotEmail = !status;
        },
        setPhoneErrorStatus(state, status) {
            state.errors.phone.hasLetters = status;
        },
        setName(state, name) {
            state.form.name = name;
        },
        setIsSubmitClicked(state) {
            state.isSubmitClicked = true; 
        },
        setEmail(state, email) {
            state.form.email = email;
        },
        setPhone(state, phone) {
            state.form.phone = phone;
        },
        setBirth(state, birth) {
            state.form.birth = birth;
        },
    },
    getters: {
        IsTherePhoneError(state) {
            return state.errors.phone.hasLetters;
        },
        IsThereNameError(state) {
            return state.errors.name.hasDigits;
        },
        IsThereEmailError(state) {
            return state.errors.email.isEmail;
        },
        getUsers(state) {
            return state.users;
        },
        getIsSubmitClicked(state) {
            return state.isSubmitClicked;
        },
        getName(state) {
            return state.form.name;
        },
        getEmail(state) {
            return state.form.email;
        },
        getPhone(state) {
            return state.form.phone;
        },
        getBirth(state) {
            return state.form.birth;
        },
    }
}