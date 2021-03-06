import axios from 'axios';

import {
    getDocuments,
    postDocument,
    getDocument,
    deleteDocument,
    updateDocument,
} from '../firebase';

export async function getDiaryList(
    { page, orderby } = { page: 1, orderby: '' }
) {
    //const response = await axios.get<Diary[]>(`https://api.github.com/users`);
    const response = await getDocuments('diary');

    //sort
    response.sort((a: any, b: any) =>
        new Date(a.diary_date) > new Date(b.diary_date) ? -1 : 1
    );
    return response;
}

// TODO: 나중에 stirng -> number로 변경
export async function getDiaryData(id: string) {
    const response = await getDocument('diary', id);

    return response;
}

export async function setDiary(diary: Diary) {
    const newDiary = { ...diary };
    // 유효성 체크는 완료 후 오는 것으로.
    newDiary['insert_at'] = new Date();
    newDiary['update_at'] = new Date();

    // firebase 입력 시 id가 없어야지 도큐먼트아이디가 자동 생성된다.
    delete newDiary.id;
    await postDocument('diary', newDiary);
}

export async function updateDiary(diary: Diary) {
    // 유효성 체크는 완료 후 오는 것으로.
    diary['update_at'] = new Date();

    await updateDocument('diary', diary);
}

export async function deleteDiary(id: string) {
    await deleteDocument('diary', id);
}

export interface Diary {
    id?: string;
    title: string;
    diary_date: string;
    content: string;
    mood: string;
    weather: string;
    open_yn?: string;
    user_id: string;
    user_name: string;
    insert_at?: Date;
    update_at?: Date;
}
