import {Quicksand, Roboto, Lusitana} from 'next/font/google';

export const quicksand = Quicksand({
    subset: ['latin'],
    preload: true,
})

export const roboto = Roboto({
    subset: ['latin'],
    weight: ['400'],
    preload: true,
})

export const lusitana = Lusitana({
    subset: ['latin'],
    weight: ['400'],
    preload: true,
})