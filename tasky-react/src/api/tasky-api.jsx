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