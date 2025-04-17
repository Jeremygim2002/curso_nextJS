import {Quicksand, Roboto, Lusitana} from 'next/font/google';

export const quicksand = Quicksand({
    preload: true,
    subset: ['latin'],
})

export const roboto = Roboto({
    preload: true,
    subset: ['latin'],
    weight: ['400'],
})

export const lusitana = Lusitana({
    preload: true,
    subset: ['latin'],
    weight: ['400'],
})