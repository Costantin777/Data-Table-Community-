import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [
        { id: 1, name: 'Darlene Robertson', email: 'trungkien@gmail.com', status: 'Free', role: 'Reporter' },
        { id: 2, name: 'Devon Lane', email: 'tranthuy@gmail.com', status: 'Busy', role: 'Bot Analyst' },
        // Інші дані...
    ],
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        editEmployee: (state, action) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(emp => emp.id !== action.payload);
        },
    },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
