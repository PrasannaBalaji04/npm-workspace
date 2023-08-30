import { fetchUser, Employee } from "../src/userFetch"; // Update the import path
import * as userFetch from "../src/userFetch";
import axios from 'axios';

jest.mock('axios'); // Mock the axios library

describe('User Fetching using mock', () => {
    it("should fetch user data", async () => {
        const mockedData: Employee = {
            _id: '64af917ca6093d6f0622881f',
            name: 'Akhi',
            age: 21,
            gender: 'Male',
            address: 'abc def ghi',
            designation: 'Software Analyst',
            __v: 0,
        };

        (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: { data: mockedData } });

        const user = fetchUser('64af917ca6093d6f0622881f');

        await expect(user).resolves.toMatchObject(mockedData);
    });

    it('should handle fetch error', async () => {
        (axios.get as jest.Mock).mockRejectedValue({ response: { status: 404 } });

        const userPromise = fetchUser('invalid-id');

        await expect(userPromise).rejects.toThrowError('Network response was not ok');
    });
});


describe('User Fetching (Spying on fetchUser for Data Checking)', () => {
    it("should fetch user data and log data to console", async () => {
        const mockedData: Employee = {
            _id: '64af917ca6093d6f0622881f',
            name: 'Akhi',
            age: 21,
            gender: 'Male',
            address: 'abc def ghi',
            designation: 'Software Analyst',
            __v: 0,
        };

        // Creating a spy on fetchUser
        const fetchUserSpy = jest.spyOn(userFetch, 'fetchUser');

        (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: { data: mockedData } });

        const user = fetchUser('64af917ca6093d6f0622881f');

        await expect(user).resolves.toMatchObject(mockedData);

        // Verify that fetchUser was called with the correct arguments
        expect(fetchUserSpy).toHaveBeenCalledWith('64af917ca6093d6f0622881f');

        // Clean up the spy
        fetchUserSpy.mockRestore();
    });
});