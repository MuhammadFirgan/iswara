import { z } from "zod";

export const customFormValidation = z.object({
    'title': z
        .string()
        .min(2, 'Judul minimal 2 karakter')
        .max(50, 'Judul terlalu panjang'),
    'description': z
        .string()
        .min(2, 'Deskripsi minimal 2 karakter')
        .max(400, 'Deskripsi terlalu panjang')
        .optional(),
    'voiceType': z
        .string()
        .min(2, 'Pilih setidaknya 1 jenis suara'),
    'prompt': z
        .string()
        .min(5, 'Tulis setidaknya 5 kata')
    
})