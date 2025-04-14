import {Quicksand, Roboto} from 'next/font/google';

export const quicksand = Quicksand({
    subset: ['latin'],
})

export const roboto = Roboto({
    subset: ['latin'],
    weight: ['400', '500', '700']
})