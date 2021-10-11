import axios from 'axios';
import { getDiary } from '../firebase';

export async function getDiaryList() {
    //const response = await axios.get<Diary[]>(`https://api.github.com/users`);
    const response = await getDiary();
    return response;
}

// TODO: 나중에 stirng -> number로 변경
export async function getDiaryDetail(id: string) {
    const response = await axios.get<Diary>(
        `https://api.github.com/users/${id}`
    );
    return response.data;
}

export interface Diary {
    id: 1;
    title: string;
    diary_date: string;
    content: string;
    mood: string;
    weather: string;
    open_yn: string;
    user_id: string;
    user_name: string;
}
