import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHotels = createAsyncThunk(
    'search/fetchHotels',
    async (query, thunkAPI) => {
        try {
            const url = `https://mpccacb2d6638507f216.free.beeceptor.com/hotel-data`;
            const response = await fetch(url)

            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }

            const data = await response.json();

            const filtered = data.filter(hotel =>
                hotel.name.toLowerCase().includes(query.toLowerCase()) ||
                hotel.location.city.toLowerCase().includes(query.toLowerCase())
            );

            return filtered;


        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'Something went wrong')
        }
    }
)

const initialState = {
    query: '',
    results: [],
    status: 'idle',
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.results = action.payload;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'failed to fetch hotels'
            })
    },
})

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer