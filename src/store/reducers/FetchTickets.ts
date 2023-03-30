import { createAsyncThunk } from '@reduxjs/toolkit';import { ITicket } from '../../Components/models/Ticket';import axios from 'axios';type IFetchTickets = {  stop: boolean;  tickets: ITicket[];};type fetchTicketsProp = {  searchId: string;  stop: boolean;};export const fetchTickets = createAsyncThunk(  'ticket/fetchTickets',  async (fetchTicketsProp: fetchTicketsProp, thunkAPI) => {    const { stop, searchId } = fetchTicketsProp;    try {      if (!stop) {        const tickets = await axios.get<IFetchTickets>(          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`        );        return tickets.data;      }    } catch (e) {      return thunkAPI.rejectWithValue('Ошибка загрузки');    }  });