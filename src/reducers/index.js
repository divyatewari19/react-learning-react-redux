import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scurbs', duration: '4:05'},
        {title: 'I want it that way', duration: '3:35'},
        {title: 'Need no Education', duration: '4:55'},
        {title: 'Macarena', duration: '1:45'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED' )
        return action.payload;
    
    return selectedSong;

}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})