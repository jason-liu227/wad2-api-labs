const BASE_URL = 'http://localhost:8080/api/tasks';

export const getTasks = async () => {
    const res = await fetch(BASE_URL);
    return handleResponse(res);
};

export const addTask = async (data) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return handleResponse(res);
};

export const deleteTask = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    return handleResponse(res);
};

export const updateTask = async (data) => {
    const res = await fetch(`${BASE_URL}/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return handleResponse(res);
};

const handleResponse = async (res) => {
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
};

export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};
