import {Quicksand, Roboto, Lusitana} from 'next/font/google';

export const quicksand = Quicksand({
    subset: ['latin'],
})

export const roboto = Roboto({
    subset: ['latin'],
    weight: ['400', '500', '700']
})

export const lusitana = Lusitana({
    subset: ['latin'],
    weight: ['400']
})