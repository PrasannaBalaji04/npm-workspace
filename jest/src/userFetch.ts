import axios from 'axios';

export interface Employee {
    _id: string;
    name: string;
    age: number;
    gender: string;
    address: string;
    designation: string;
    __v: number;
};
export async function fetchUser(id: string): Promise<Employee> {
    try {
        const res = await fetch(`http://localhost:3000/${id}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        // console.error('Error fetching data:', error);
        throw error;
    }
}

