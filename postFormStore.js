//postFormStore.js
//PostForm 입력 폼과 관련된 스토어
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const usePostFormStore = create(
    devtools((set) => ({
        formData: {
            name: 'rlm@a.b.c',
            title: '',
            content: '',
            file: '',
        },
        setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
        resetFormData: () => set({ formData: { name: '', title: '', content: '', file: '' } }), //fromData초기화
    }))
);
